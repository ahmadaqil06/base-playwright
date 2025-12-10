export const getEnv = () => ({
  url: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  unicname1: process.env.USERNAME || 'Admin',
  password: process.env.PASSWORD || 'admin123',
});
