import http from 'node:http';
import https from 'node:https';
import { URL } from 'node:url';

const healthUrl = process.env.HEALTH_URL || 'http://localhost:3000/api/health';
const url = new URL(healthUrl);
const client = url.protocol === 'https:' ? https : http;

console.log(`🔎 Checking backend health: ${healthUrl}`);

const req = client.request(url, { method: 'GET' }, (res) => {
  const { statusCode } = res;
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (statusCode >= 200 && statusCode < 300) {
      console.log('✅ Backend health check passed.');
      process.exit(0);
    }
    console.error(`❌ Backend health check failed with status ${statusCode}`);
    console.error(data);
    process.exit(1);
  });
});

req.on('error', (err) => {
  console.error('❌ Backend health check failed:', err.message);
  process.exit(1);
});

req.end();
