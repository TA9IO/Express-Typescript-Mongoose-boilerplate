import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './src/init/routes';
import localize from './src/init/localize';
import db from './src/init/db';
import theApp from './src/init/theApp';
import cors from 'cors';

dotenv.config();
const app: Express = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
theApp(app);
localize(app);
routes(app);


// listen for requests
(async () => {
  await db("mongodb+srv://ta9i:tCxRS1NJHFye3xnN@db.7igx4m1.mongodb.net/?retryWrites=true&w=majority");
  app.listen(3000, () => {
    console.log("⚡️ [server]: Server is running at", 3000);
  });
})();
export default app;
