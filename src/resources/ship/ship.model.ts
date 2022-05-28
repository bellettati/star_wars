import { Schema, model } from 'mongoose';
import IShip from './ship.interface';

const shipSchema = new Schema(
  {
    fuelCapacity: { type: Number, required: true, default: 100 },
    fuelLevel: { type: Number, required: true, default: 100 },
    weightCapacity: { type: Number, required: true, default: 200 },
    pilot: { type: Schema.Types.ObjectId, ref: 'Pilot' },
  }
);

export default model<IShip>('Ship', shipSchema);