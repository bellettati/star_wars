import mongoose, { Schema, model } from 'mongoose';
import IPilot from './pilot.interface';
import { planetList } from '../../utils/planets';

const randomPlanet = planetList[Math.floor(Math.random() * planetList.length)]


const pilotSchema = new Schema(
  {
    pc: { type: Number, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    credits: { type: Number, default: 0 },
    location: { type: String,  default: randomPlanet },
    ship: { type: mongoose.SchemaTypes.ObjectId, ref: 'Ship' },
  },
  { timestamps: true }
);

export default model<IPilot>('Pilot', pilotSchema);