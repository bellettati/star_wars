import { IPilotRepository } from "repositories/IPilotRepository";

export class DeletePilotsUseCase {

  constructor(
    private pilotRepository: IPilotRepository
  ) {}

  async deleteByPC(pc: string): Promise<void> {
    try {
      await this.pilotRepository.deleteByPC(pc);
    } catch(e: any) {
      throw new Error(e.message);
    }
  }

  async deleteAll(): Promise<void> {
    try {
      await this.pilotRepository.deleteAll();
    } catch(e: any) {
      throw new Error(e.message);
    }
  }
}