import { Express } from 'express';

import { authRouter, userRouter,get } from '../mvc/routes';
import { Routes } from '../mvc/routes/routesStrings';

export default (app: Express) => {
  app.use('/', authRouter);
  app.use('/', get);
  app.use(Routes.user, userRouter);
};
