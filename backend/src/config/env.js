import dotenv from 'dotenv';
dotenv.config();
export const env={
  port:Number(process.env.PORT||5000),
  mongoUri:process.env.MONGODB_URI||'',
  jwtSecret:process.env.JWT_SECRET||'dev-only-change-me',
  adminUsername:process.env.ADMIN_USERNAME||'admin',
  adminPassword:process.env.ADMIN_PASSWORD||'Aminul@1',
  frontendOrigins:(process.env.FRONTEND_URL||'http://localhost:5000').split(',').map(s=>s.trim()).filter(Boolean),
  nodeEnv:process.env.NODE_ENV||'development'
};
