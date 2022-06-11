import { MongoContractRepository } from "../../repositories/implementations/MongoContractRepository";
import { PublishContractUseCase } from "./PublishContractUseCase";
import { PublishContractController } from "./PublishContractController";

const publishContractUseCase = new PublishContractUseCase(new MongoContractRepository());
const publishContractController = new PublishContractController(publishContractUseCase);

export { publishContractController };