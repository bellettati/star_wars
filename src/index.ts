import { app } from './app';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test', () => console.log('connected to DB'));

app.listen(3000, () => console.log('server listening on port 3000'));