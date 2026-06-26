import express, { type Express } from 'express';

import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import auth from '../routes/auth.routes';
import error from '../middleware/error';

const registerRoutes = (app: Express) => {
  app.use(
    cors({
      origin: ['https://eunisell-chemicals-client.vercel.app', 'http://localhost:5173'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
  );

  app.use(helmet());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));

  app.use('/api/v1/auth', auth);
  app.use(error);
};

export default registerRoutes;
