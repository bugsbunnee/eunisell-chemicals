import express from 'express';
import registerConfig from './config';
import registerRoutes from './routes';

const registerApp = () => {
  const app = express();

  registerConfig();
  registerRoutes(app);

  return app;
};

export default registerApp;
