import { v4 as uuidv4 } from 'uuid';
import { Ship } from './Ship';

export class Pilot{
  
  public readonly pilotCertification: string;
  public name: string;
  public age: number;
  public credits: number;
  public location: string;
  public ship?: Ship;

  constructor(props: Omit<Pilot, 'pilotCertification'>) {
    this.pilotCertification = uuidv4();
    Object.assign(this, props);
  }
}
