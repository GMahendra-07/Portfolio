import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const {
  DB_HOST = 'localhost',
  DB_PORT = '3306',
  DB_USER = 'root',
  DB_PASSWORD,
  DB_NAME = 'portfolio',
  PORT = 3000,
  EMAIL_SMTP_HOST,
  EMAIL_SMTP_PORT = '587',
  EMAIL_SMTP_USER,
  EMAIL_SMTP_PASS,
  ALERT_EMAIL_TO,
} = process.env;

if (!DB_USER || !DB_HOST || !DB_NAME) {
  throw new Error('Missing database environment variables. Copy backend/.env.example to backend/.env and fill DB_HOST, DB_USER, DB_PASSWORD, DB_NAME.');
}

const emailEnabled = EMAIL_SMTP_HOST && EMAIL_SMTP_USER && EMAIL_SMTP_PASS && ALERT_EMAIL_TO;
let transporter;

if (emailEnabled) {
  transporter = nodemailer.createTransport({
    host: EMAIL_SMTP_HOST,
    port: Number(EMAIL_SMTP_PORT),
    secure: Number(EMAIL_SMTP_PORT) === 465,
    auth: {
      user: EMAIL_SMTP_USER,
      pass: EMAIL_SMTP_PASS,
    },
  });
} else {
  console.warn('⚠️ Email alerts are disabled. Set EMAIL_SMTP_HOST, EMAIL_SMTP_USER, EMAIL_SMTP_PASS, and ALERT_EMAIL_TO in backend/.env to enable alerts.');
}

let pool;

async function initializeDatabase() {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
  await connection.end();

  pool = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;

  await pool.query(createTableQuery);
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Contact API is running.' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const insertQuery = `
      INSERT INTO contacts (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `;

    await pool.execute(insertQuery, [name.trim(), email.trim(), subject.trim(), message.trim()]);

    if (emailEnabled) {
      try {
        await transporter.sendMail({
          from: EMAIL_SMTP_USER,
          to: ALERT_EMAIL_TO,
          subject: `New portfolio message from ${name}`,
          text: `You have a new message from ${name} <${email}>:\n\nSubject: ${subject}\n\n${message}`,
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
          `,
        });
      } catch (emailError) {
        console.error('Error sending email alert:', emailError);
      }
    }

    res.status(201).json({ status: 'success', message: 'Your message has been saved. Mahendra will respond shortly.' });
  } catch (error) {
    console.error('Error inserting contact message:', error);
    res.status(500).json({ error: 'Unable to save message right now. Please try again later.' });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, name, email, subject, message, created_at FROM contacts ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Unable to load contact records.' });
  }
});

const serverPort = Number(PORT) || 3000;
initializeDatabase()
  .then(() => {
    const server = app.listen(serverPort, () => {
      console.log(`Portfolio contact API started at http://localhost:${serverPort}`);
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${serverPort} is already in use. Stop the running service or change PORT in backend/.env.`);
      } else {
        console.error('Server error:', error);
      }
      process.exit(1);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  });
