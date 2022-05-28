import pilotModel from './pilot.model';
import IPilot from './pilot.interface';
import shipModel from '../ship/ship.model';
import { planetList } from '../../utils/planets';

class PilotService {

  public findAll = async (): Promise<IPilot[]> => {
    return await pilotModel.find({}).populate('ship');
  }

  public findByPC = async (pc: number): Promise<any> => {
    try {
      const pilot = await pilotModel
        .findOne({ pc }).populate('ship').exec();
      if(!pilot)
        throw new Error('pilot not found');

      return pilot;
    } catch(e: any) {
      throw new Error(e.message);
    }
  }

  public create = async (name: string, age: number): Promise<IPilot | void> => {
    try {
      const pc = this.generatePC();
      
      const pilot = new pilotModel({ pc, name, age });
      const ship = new shipModel({});

      pilot.ship = ship._id;
      ship.pilot = pilot._id;

      await pilot.save();
      await ship.save();

      return pilot;
    } catch(e) {
      throw new Error('unable to create pilot');
    }
  }
  private generatePC = (): number => {
    const max: number = 999777;
    const min: number = 101010;
  
    const nums: string[] = Math.floor(Math.random() * (max - min) + min).toString().split('');
  
    let evenSum: number = 0;
    let oddSum: number = 0;
    nums.forEach((n, i) => {
  
      let curr: number = parseInt(n);
  
      const isOddPosition: number = i % 2;
      if(!isOddPosition) {
        evenSum += curr;
        return;
      }
      
      let mult: number = curr * 2;
      if(mult >= 10) {
        curr = 0;
        mult.toString().split('').forEach(num => curr += parseInt(num));
        oddSum += curr;
        return;
      }
      oddSum += curr;
    });
  
    const total: number = evenSum + oddSum;
    const checkDigit: number = 10 - ((total) % 10);
  
    return parseInt(nums.join('')) * 10 + checkDigit;
  }

  public deleteByPC = async (pc: number): Promise<IPilot | void> => {
    try {
      const pilot = await this.findByPC(pc);
      if(!pilot)
        throw new Error('pilot not found');

      await shipModel.deleteOne({ pilot: pilot._id });
      await pilotModel.deleteOne({ pc: pc });
      return pilot
    } catch(e: any) {
      console.log(e);
      throw new Error('unable to delete pilot');
    }
  }

  public deleteAll = async (): Promise<string  | void> => {
    try {
      await shipModel.deleteMany({});
      await pilotModel.deleteMany({});
      return 'all pilots deleted from system';
    } catch(e: any) {
      throw Error('unable to delete pilots');
    }
  }

  public getPilotsOnPlanet = async (planet: string): Promise<IPilot[] | void> => {
    try {
      const pilots = await pilotModel.find({ planet });
      return pilots;
    } catch(e: any) {

    }
  }

  public updateLocation = async (pc: number, planet: string): Promise<string | void> => {
    try {
      const planetExists = planetList.includes(planet);
      const pilot = await this.findByPC(pc);
      if(!planetExists || !pilot)
        throw new Error('pilot or planet are inavlid');
      await pilotModel.updateOne({ pc }, { $set: { location: planet } });
      return `updated location to ${planet}`;
    } catch(e: any) {
      throw new Error('unable to update planet');
    }
  }
}

export default PilotService;