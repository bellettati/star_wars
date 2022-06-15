import express from 'express';

import pilotRouter from './routes/PilotRoutes';
import contractRouter from './routes/ContractRoutes';
import { errorMiddleware } from './middleware/ErrorMiddleware';
 
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/pilots', pilotRouter, errorMiddleware);
app.use('/contracts', contractRouter);

export { app };