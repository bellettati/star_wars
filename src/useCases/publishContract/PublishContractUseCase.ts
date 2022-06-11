import { IContractRepository } from "../../repositories/IContractRepository";
import { planetList } from '../../providers/Planets';
import { v4 as uuidv4 } from 'uuid';
import { Contract } from "../../entities/Contract";


export class PublishContractUseCase {
  constructor(private contractRepository: IContractRepository) {}

  async execute(): Promise<void> {
    try {
      // const origin = planetList[Math.floor(Math.random() * planetList.length)];
      const origin = 'calas';

      const availablePlanets = planetList.filter((planet) => planet !== origin);
      const destination =
        availablePlanets[Math.floor(Math.random() * availablePlanets.length)];
  
      const payload = [
        { resource: "water", amount: this.random(100, 500) },
        { resource: "food", amount: this.random(100, 500) },
        { resource: "minerals", amount: this.random(100, 500) },
      ];
  
      let value = 0;
      payload.forEach((res) => (value += res.amount * 5));
  
      const description = `${payload[0].amount} tons of ${payload[0].resource}, ${payload[1].amount} tons of ${payload[1].resource} and ${payload[2].amount} tons of ${payload[2].resource} exported from ${origin} to ${destination}.`;
      
      const id = uuidv4();
      const contract = new Contract({ id, description, payload, origin, destination, value });
      await this.contractRepository.publishContract(contract);
    } catch(e: any) {
      throw new Error(e.message);
    }
  }
  private random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
