import { Schema, model } from 'mongoose';
import { Contract } from '../../../entities/Contract';

const contractSchema = new Schema(
  {
    id: { type: String, required: true },
    description: { type: String, required: true },
    payload: { type: [Object], required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    value: { type: Number, required: true },
    isOpen: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const contractModel = model<Contract>('Contract', contractSchema);

export { contractModel };