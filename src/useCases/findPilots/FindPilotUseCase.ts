import { Pilot } from "entities/Pilot";
import { IPilotRepository } from "repositories/IPilotRepository";

export class FindPilotUseCase {

  constructor(
    private pilotRepository: IPilotRepository
  ) {}

  async findAll(): Promise<Pilot[] | string> {
    try {
      const pilots = await this.pilotRepository.findAll();
      if(pilots.length <= 0) 
        return 'there are no pilots';

      return pilots;
    } catch(e: any) {
      throw new Error(e.message || 'something went wrong with getting all pilots');
    }
  }

  async findByPC(pc: string): Promise<Pilot> {
    try {
      const pilot = await this.pilotRepository.findByPC(pc);
      if(!pilot) 
        throw new Error('pilot not found');

      return pilot;
    } catch(e: any) {
      throw new Error(e.message || 'something went with getting one pilot');
    }
  }
}