import { Contract } from "entities/Contract";
import { IContractRepository } from "../../repositories/IContractRepository";
import { contractModel } from "./models/ContractModel";

export class MongoContractRepository implements IContractRepository {
  
  async findAll(): Promise<Contract[]> {
    try {
      const contracts = await contractModel.find({ });
      return contracts;
    } catch(e: any) {
      throw new Error('unable to get contracts');
    }
  }

  async findById(id: string): Promise<Contract> {
    try {
      const contract = await contractModel.findOne({ id });
      if(!contract)
        throw new Error('contract not found');
      return contract;
    } catch(e: any) {
      throw new Error(e.message || 'unable to find contract');
    }
  }

  async findClosedContracts(): Promise<Contract[]> {
      try {
        const contracts = await contractModel.find({ isOpen: false });
        return contracts;
      } catch(e: any) {
        throw new Error('unable to find closed contracts');
      }
  }

  async findOpenContracts(): Promise<Contract[]> {
      try {
        const contracts = await contractModel.find({ isOpen: true });
        return contracts;
      } catch(e: any) {
        throw new Error('unable to find open contracts');
      }
  }

  async publishContract(contract: Contract): Promise<void> {
    try {
      await contractModel.create(contract);
    } catch(e: any) {
      throw new Error(e.message || 'unable to publish contract');
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      const contract = await this.findById(id);
      await contractModel.deleteOne({ id: contract.id });
    } catch(e: any) {
      throw new Error(e.message || 'unable to delete pilots');
    }
  }

  async deleteAll(): Promise<void> {
    try {
      await contractModel.deleteMany({ });
    } catch(e: any) {
      throw new Error(e.message || 'unable to delete contracts');
    }
  }

  async closeContract(id: string): Promise<void> {
    try {
      const contract = await this.findById(id);
      await contractModel.updateOne({ id: contract.id }, { $set: { isOpen: false } });
    } catch(e: any) {
      throw new Error(e.message);
    }
  }
}