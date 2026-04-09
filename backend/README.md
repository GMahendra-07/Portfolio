# Portfolio Backend

This backend powers the contact form in the portfolio.
It saves messages into a MySQL database and exposes a simple API for the React frontend.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Copy the example environment file:
```bash
cp .env.example .env
```

3. Update `.env` if needed. The default database settings match the provided credentials:
- `DB_HOST=localhost`
- `DB_PORT=3306`
- `DB_USER=root`
- `DB_PASSWORD=Mahi@123`
- `DB_NAME=portfolio`

4. Start the backend:
```bash
npm start
```

## API Endpoints

- `GET /api/health` — health check
- `POST /api/contact` — save a contact message
- `GET /api/contacts` — retrieve stored messages
- `npm run check:health` — verify the backend health endpoint is reachable

## Email alert support

If you want to receive an alert email whenever a visitor sends a message:
1. Add SMTP settings to `backend/.env`.
2. Set `ALERT_EMAIL_TO` to your alert destination.

The backend will still save all requests to MySQL even if email delivery is not configured.

## Notes

- The server automatically creates the `portfolio` database and the `contacts` table if they do not exist.
- The frontend is configured to use `VITE_API_BASE_URL` from the root `.env`.
