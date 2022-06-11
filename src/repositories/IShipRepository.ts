import { Ship } from "entities/Ship";

export interface IShipRepository {
  findAll(): Promise<Ship[]>;
  findById(id: string): Promise<Ship>;
  findByPilotId(pilotId: string): Promise<Ship>;
  save(ship: Ship): Promise<void>;
  updateFuelLevel(id: string, fuelLevel: number): Promise<void>;
  updateManyFuelLevel(pilotId: string, fuelLevel: number): Promise<void>
}