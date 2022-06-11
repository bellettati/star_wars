import { MongoPilotRepository } from "../../repositories/implementations/MongoPilotRepository";
import { FindPilotUseCase } from "./FindPilotUseCase";
import { FindPilotsController } from "./FindPilotsController";

const repository = new MongoPilotRepository();

const findPilotUseCase = new FindPilotUseCase(repository);
const findPilotController = new FindPilotsController(findPilotUseCase);

export { findPilotUseCase, findPilotController };