import { MongoContractRepository } from "../../repositories/implementations/MongoContractRepository";
import { FindContractUseCase } from "./FindContractUseCase";
import { FindContractController } from "./FindContractController";

const findContractUseCase = new FindContractUseCase(new MongoContractRepository());
const findContractController = new FindContractController(findContractUseCase);

export { findContractController };