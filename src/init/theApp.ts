/**
 * By calling theApp(app); in the index.ts file, 
  this exported function is invoked, and it sets up the necessary middleware for the provided Express application instance.
*/

import express, { Express } from 'express';
const logger = require('morgan');
const cookieParser = require('cookie-parser');
export default (app: Express) => {
  // 🢃 logs HTTP requests and responses to the console in a developer-friendly format 🢃.
  app.use(logger('dev'));
  // 🢃  parses client cookies and stores them in req.cookies 🢃.
  app.use(cookieParser());
  app.use(express.json());
  // 🢃  It allows the application to parse URL-encoded form data from the request body, making it accessible through req.body. 🢃.
  app.use(express.urlencoded({ extended: true }));
};
