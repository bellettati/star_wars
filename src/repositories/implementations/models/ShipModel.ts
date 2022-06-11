import { Schema, model } from 'mongoose';
import { Ship } from '../../../entities/Ship';

const shipSchema = new Schema(
  {
    id: { type: String, required: true },
    fuelCapacity: { type: Number, required: true },
    fuelLevel: { type: Number, required: true },
    weightCapacity: { type: Number, required: true },
    pilotId: { type: String, ref: 'Pilot' }
  },  
  { timestamps: true }
);

const shipModel = model<Ship>('Ship', shipSchema);

export { shipSchema, shipModel };