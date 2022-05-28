import shipModel from './ship.model';
import IShip from './ship.interface';
import { Schema } from 'mongoose';

class ShipService {

  public getShip = async (pilotId: Schema.Types.ObjectId): Promise<IShip | void> => {
    try {
      const ship = await shipModel.findOne({ pilot: pilotId });
      return ship;
    } catch(e: any) {
      throw new Error(e);
    }
  }

  public create = async (pilotId: Schema.Types.ObjectId): Promise<IShip | void> => {
    const ship = new shipModel({ pilot: pilotId });
    ship.save(e => {
      if(e) throw new Error('not possible to create ship');
    })
  }

  public updateFuelLevel = async (pilotId: Schema.Types.ObjectId, fuel: number): Promise<string | void> => {
    try {
      const ship = await this.getShip(pilotId);
      if(!ship) throw new Error('ship not found');
      await shipModel.updateOne({ pilot: pilotId }, { $set: { fuelLevel: ship.fuelLevel + fuel } });
      return 'consumed 10 fuel';
    } catch(e: any) {
      throw new Error(e.message);
    }
  }
}

export default ShipService;