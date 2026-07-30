import express, { type Express } from 'express';

import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import auth from '../routes/auth.routes';
import enquiries from '../routes/enquiry.routes';
import blog from '../routes/blog.routes';
import activity from '../routes/activity.routes';
import subscriptions from '../routes/subscription.routes';
import applications from '../routes/application.routes';
import careers from '../routes/career.routes';

import error from '../middleware/error';

const registerRoutes = (app: Express) => {
  app.use(
    cors({
      origin: ['https://www.eunisell.com', 'https://eunisell.com', 'https://eunisell-chemicals-client.vercel.app', 'http://localhost:5173'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    })
  );

  app.use(helmet());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));

  app.use('/api/v1/auth', auth);
  app.use('/api/v1/enquiries', enquiries);
  app.use('/api/v1/blog', blog);
  app.use('/api/v1/activity', activity);
  app.use('/api/v1/subscriptions', subscriptions);
  app.use('/api/v1/applications', applications);
  app.use('/api/v1/careers', careers);

  app.use(error);
};

export default registerRoutes;
