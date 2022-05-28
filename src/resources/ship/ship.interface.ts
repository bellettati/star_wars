import { Document } from 'mongoose';
import IPilot from '../pilot/pilot.interface';

interface IShip extends Document {
  pilot: IPilot,
  fuelCapacity: number;
  fuelLevel: number;
  weightCapacity: number;
}

export default IShip;