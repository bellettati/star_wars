import { IPilotRepository } from '../IPilotRepository';
import { Pilot } from '../../entities/Pilot';
import { pilotModel } from './models/PilotModel';
import { shipModel } from './models/ShipModel';

export class MongoPilotRepository implements IPilotRepository {
  
  async findAll(): Promise<Pilot[]> {
    try {
      return await pilotModel.find({ });
    } catch(e: any) {
      throw new Error(e.message);
    }
  }

  async findByPC(pc: string): Promise<Pilot> {
    try {
      const pilot = await pilotModel.findOne({ pilotCertification: pc }).populate('ship');
      if(!pilot) {
        throw new Error('pilot not found');
      }
      await pilotModel.where()
      return pilot;
    } catch(e: any) {
      throw new Error(e.message);
    }
  }

  async findPilotsOnPlanet(location: string): Promise<Pilot[]> {
    try {
      const pilots = await pilotModel.find({ location });
      return pilots;
    } catch(e: any) {
      throw new Error(`unable to find pilots`);
    }
  }

  async save(pilot: Pilot): Promise<void> {
    try {
      const ship = await shipModel.create(pilot.ship); 
      await pilotModel.create({ ...pilot, ship: ship._id });
    } catch(e: any) {
      console.log(e.message);
      throw new Error('unable to create pilot');
    }
  }

  async updateLocation(pc: string, planet: string): Promise<void> {
    try {
      const pilot = await this.findByPC(pc);
      await pilotModel.updateOne(
        { pilotCertification: pilot.pilotCertification },
        { $set: { location: planet } }
      );
    } catch(e: any) {
      throw new Error('unable to update pilot location');
    }
  }

  async updateManyLocation(origin: string, destination: string): Promise<void> {
    try {
      await pilotModel.updateMany(
        { location: origin },
        { $set: { location: destination } }
      );
    } catch(e: any) {
      throw new Error('unable to update pilots locations');
    }
  }

  async deleteByPC(pc: string): Promise<void> {
    try {
      const pilot = await this.findByPC(pc);
      await pilotModel.deleteOne({ pilotCertification: pilot.pilotCertification });
    } catch(e: any) {
      throw new Error(e.message);
    }
  }

  async deleteAll(): Promise<void> {
      try {
        await pilotModel.deleteMany({ });
      } catch(e: any) {
        throw new Error('unable to delete pilots');
      }
  }

}