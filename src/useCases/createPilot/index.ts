import { MongoPilotRepository } from "../../repositories/implementations/MongoPilotRepository";
import { CreatePilotUseCase } from "./CreatePilotUseCase";
import { CreatePilotController } from "./CreatePilotController";

const mongoPilotRespository = new MongoPilotRepository();

const createPilotUseCase = new CreatePilotUseCase(mongoPilotRespository);
const createPilotController = new CreatePilotController(createPilotUseCase);

export { createPilotUseCase, createPilotController };