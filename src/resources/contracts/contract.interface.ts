import { Document } from 'mongoose';

interface IContract extends Document {
  description: string;
  payload: string[];
  origin: string;
  destination: string;
  value: number;
  open: boolean;
}

export default IContract;