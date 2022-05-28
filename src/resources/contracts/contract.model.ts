import { number, string } from 'joi';
import { Schema, model } from 'mongoose';
import IContract from './contract.interface';

const contractSchema = new Schema(
  {
    description: { type: String, required: true },
    payload: { type: [{ resource: String, amount: Number }], required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    value: { type: Number, required: true },
    open: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model<IContract>('Contract', contractSchema);