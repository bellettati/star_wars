import { Contract } from "../entities/Contract";

export interface IContractRepository {
  findAll(): Promise<Contract[]>;
  findById(id: string): Promise<Contract>;
  findClosedContracts(): Promise<Contract[]>
  findOpenContracts(): Promise<Contract[]>
  publishContract(contract: Contract): Promise<void>;
  deleteById(id: string): Promise<void>;
  deleteAll(): Promise<void>;
  closeContract(id: string): Promise<void>
}