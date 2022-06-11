import { IPilotRepository } from '../../repositories/IPilotRepository';
import { ICreatePilotRequestDTO } from './CreatePilotDTO';
import { Pilot } from '../../entities/Pilot';
import { Ship } from '../../entities/Ship';
import { IShipRepository } from 'repositories/IShipRepository';
import { v4 as uuidv4 } from 'uuid';

export class CreatePilotUseCase {

  constructor(
    private pilotRepository: IPilotRepository,
  ) {}

  async execute(data: ICreatePilotRequestDTO): Promise<void> {
    try {
      const pilot = new Pilot(data);
      const ship = new Ship({
        id: uuidv4(),
        fuelCapacity: 100,
        fuelLevel: 100,
        weightCapacity: 400,
        pilotId: pilot.pilotCertification
      })
      pilot.ship = ship;
  
      await this.pilotRepository.save(pilot);
    } catch(e: any) {
      throw new Error(e.message);
    }
  }
}