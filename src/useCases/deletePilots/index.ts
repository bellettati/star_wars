import { MongoPilotRepository } from "../../repositories/implementations/MongoPilotRepository";
import { DeletePilotsUseCase } from './DeletePilotsUseCase';
import { DeletePilotsController } from "./DeletePilotsController";

const deletePilotsUseCase = new DeletePilotsUseCase(new MongoPilotRepository());
const deletePilotsController = new DeletePilotsController(deletePilotsUseCase);

export { deletePilotsController };