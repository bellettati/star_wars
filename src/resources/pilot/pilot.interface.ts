import { Document } from 'mongoose';
import IShip from 'resources/ship/ship.interface';

interface IPilot extends Document{
  pc: number;
  name: string;
  age: string;
  credits: number;
  location: string;
  ship: IShip;
}

export default IPilot;