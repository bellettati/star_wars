import { MongoContractRepository } from "../../repositories/implementations/MongoContractRepository";
import { DeleteContractsUseCase } from "./DeleteContractsUseCase";
import { DeleteContractController } from "./DeleteContractController";

const deleteContractsUseCase = new DeleteContractsUseCase(new MongoContractRepository());
const deleteContractController = new DeleteContractController(deleteContractsUseCase);

export { deleteContractController };