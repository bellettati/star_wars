import { IContractRepository } from '../../repositories/IContractRepository';

export class DeleteContractsUseCase {
  
  constructor(
    private contractRepository: IContractRepository
  ) {}

  async deleteById(id: string): Promise<void> {
    try { 
      await this.contractRepository.deleteById(id);
    } catch(e: any) {
      throw new Error(e.message);
    }
  }

  async deleteAll(): Promise<void> {
    try {
      await this.contractRepository.deleteAll();
    } catch(e: any) {
      throw new Error(e.message);
    }
  }
}