import 'dotenv/config';

import { app } from './app';
import mongoose from 'mongoose';
import { validateEnv } from './providers/ValidateEnv';

validateEnv();

mongoose.connect(process.env.MONGO_PATH, () => console.log('connected to DB'));

app.listen(Number(process.env.PORT), () => console.log(`server listening on port ${process.env.PORT}`));