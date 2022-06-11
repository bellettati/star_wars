import { IShipRepository } from "../IShipRepository";
import { Ship } from "../../entities/Ship";
import { shipModel } from "./models/ShipModel";

export class MongoShipRepository implements IShipRepository {
  
  async updateManyFuelLevel(pilotId: string, fuelLevel: number): Promise<void> {
    try {

    } catch(e: any) {

    }
  }
  
  async findAll(): Promise<Ship[]> {
    try {
      const ships = await shipModel.find({ });
      return ships;
    } catch(e: any) {
      throw new Error('unable to find ships');
    }
  }

  async findById(id: string): Promise<Ship> {
    try {
      const ship = await shipModel.findOne({ id });
      if(!ship)
        throw new Error('ship not found');

      return ship;
    } catch(e: any) {
      throw new Error(e.message);
    }
  }

  async findByPilotId(pilotId: string): Promise<Ship> {
    try {
      const ship = await shipModel.findOne({ pilotId });
      if(!ship)
        throw new Error('ship not found');
      
      return ship;
    } catch(e: any) {
      throw new Error(e.message);
    }
  }

  async save(ship: Ship): Promise<void> {
    try {
      await shipModel.create(ship);
    } catch(e: any) {
      throw new Error('unable to create ship');
    }
  }

  async updateFuelLevel(pilotId: string, fuelLevel: number): Promise<void> {
    try {
      await shipModel.findOneAndUpdate({ pilotId }, { fuelLevel });
    } catch(e: any) {
      throw new Error(e.message);
    }
  }

}