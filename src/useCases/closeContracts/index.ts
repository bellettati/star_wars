import { MongoContractRepository } from "../../repositories/implementations/MongoContractRepository";
import { MongoPilotRepository } from "../../repositories/implementations/MongoPilotRepository";
import { MongoShipRepository } from "../../repositories/implementations/MongoShipRepository";

import { CloseContractUseCase } from "./CloseContractUseCase";
import { CloseContractController } from "./CloseContractController";

const useCase = new CloseContractUseCase(
  new MongoContractRepository(),
  new MongoPilotRepository(),
  new MongoShipRepository()
);

const closeContractController = new CloseContractController(useCase);

export { closeContractController };