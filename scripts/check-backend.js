import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const backendEnvPath = path.join(rootDir, 'backend', '.env');
const rootEnvPath = path.join(rootDir, '.env');

const checkEnvFile = (filePath, label) => {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing ${label} at ${filePath}`);
    return false;
  }
  return true;
};

const main = async () => {
  console.log('🔎 Checking backend integration...');

  const hasBackendEnv = checkEnvFile(backendEnvPath, 'backend environment file');
  if (!hasBackendEnv) {
    console.error('Please copy backend/.env.example to backend/.env and set your database credentials.');
    process.exit(1);
  }

  const apiBaseUrl = process.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
  const healthUrl = `${apiBaseUrl.replace(/\/$/, '')}/health`;

  console.log(`🌐 Using API endpoint: ${healthUrl}`);

  try {
    const response = await fetch(healthUrl, { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Health endpoint returned status ${response.status}`);
    }

    const body = await response.json();
    if (body.status !== 'ok') {
      throw new Error('Backend health check did not return expected response.');
    }

    console.log('✅ Backend is reachable and healthy.');
  } catch (error) {
    console.error('❌ Backend health check failed:', error.message);
    console.error('Make sure the backend is running with `cd backend && npm start`.');
    process.exit(1);
  }
};

main();
