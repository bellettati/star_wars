import { Schema, model } from 'mongoose';
import { Pilot } from '../../../entities/Pilot';

const pilotSchema = new Schema(
  {
    pilotCertification: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    credits: { type: Number, default: 0 },
    location: { type: String, default: 'earth' },
    ship: { type: String, ref: 'Ship' }
  },
  { timestamps: true }
);

const pilotModel = model<Pilot>('Pilot', pilotSchema);

export { pilotModel };