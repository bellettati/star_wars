import express from 'express';

import pilotRouter from './routes/PilotRoutes';
import contractRouter from './routes/ContractRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/pilots', pilotRouter);
app.use('/contracts', contractRouter);


export { app };