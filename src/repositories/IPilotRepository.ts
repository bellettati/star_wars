import { Pilot } from '../entities/Pilot';

export interface IPilotRepository{
  findAll(): Promise<Pilot[]>
  findByPC(pc: string): Promise<Pilot>;
  findPilotsOnPlanet(location: string): Promise<Pilot[]>
  save(pilot: Pilot): Promise<void>;
  updateLocation(id: string, planet: string): Promise<void>;
  updateManyLocation(origin: string, destination: string): Promise<void>
  deleteByPC(pc: string): Promise<void>;
  deleteAll(): Promise<void>
}