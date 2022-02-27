import 'reflect-metadata';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { userRoutes } from './routes';
import { ormConnection } from './config';

const app = express();

ormConnection.connect();

const port = process.env.PORT;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
