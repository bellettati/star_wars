import { IContractRepository } from '../../repositories/IContractRepository';
import { Contract } from '../../entities/Contract';

export class FindContractUseCase {

  constructor(
    private contractRepository: IContractRepository
  ) {}

  async findById(id: string): Promise<Contract> {
    try {
      return await this.contractRepository.findById(id);
    } catch(e: any) {
      throw new Error(e.message);
    }
  }

  async findAll(): Promise<Contract[]> {
    try {
      const contracts = await this.contractRepository.findAll();
      return contracts;
    } catch(e: any) {
      throw new Error(e.message);
    }
  }
}