"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePilotsController = void 0;
const MongoPilotRepository_1 = require("../../repositories/implementations/MongoPilotRepository");
const DeletePilotsUseCase_1 = require("./DeletePilotsUseCase");
const DeletePilotsController_1 = require("./DeletePilotsController");
const deletePilotsUseCase = new DeletePilotsUseCase_1.DeletePilotsUseCase(new MongoPilotRepository_1.MongoPilotRepository());
const deletePilotsController = new DeletePilotsController_1.DeletePilotsController(deletePilotsUseCase);
exports.deletePilotsController = deletePilotsController;
