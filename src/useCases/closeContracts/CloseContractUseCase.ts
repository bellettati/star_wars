import { IContractRepository } from "../../repositories/IContractRepository";
import { IPilotRepository } from "../../repositories/IPilotRepository";
import { IShipRepository } from "../../repositories/IShipRepository";
import { planetList } from '../../providers/Planets';
import { findPath } from '../../providers/travelAlgo'; 

export class CloseContractUseCase {

  constructor(
    private contractRepository: IContractRepository,
    private pilotRepository: IPilotRepository,
    private shipRepository: IShipRepository
  ) {}

  async execute(contractId: string): Promise<void> {
    try {
      const contract = await this.contractRepository
        .findById(contractId);
      const { origin, destination } = contract;
      
      const availablePilots = await this.pilotRepository
        .findPilotsOnPlanet(origin);
      if(availablePilots.length <= 0) 
        throw new Error(`no available piots on planet ${origin}`);

      const fuel = findPath(origin, destination);
      console.log(fuel);

      availablePilots.forEach(async pilot => {
        const { pilotCertification } = pilot;
        const ship = await this.shipRepository.findByPilotId(pilotCertification);
        const currFuel = ship.fuelLevel - fuel;

        await this.shipRepository.updateFuelLevel(pilotCertification, currFuel);
      });

      await this.pilotRepository.updateManyLocation(origin, destination);
    } catch(e: any) {
      throw new Error(e.message);
    }
  }
}
