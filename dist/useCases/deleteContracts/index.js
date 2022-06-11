"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContractController = void 0;
const MongoContractRepository_1 = require("../../repositories/implementations/MongoContractRepository");
const DeleteContractsUseCase_1 = require("./DeleteContractsUseCase");
const DeleteContractController_1 = require("./DeleteContractController");
const deleteContractsUseCase = new DeleteContractsUseCase_1.DeleteContractsUseCase(new MongoContractRepository_1.MongoContractRepository());
const deleteContractController = new DeleteContractController_1.DeleteContractController(deleteContractsUseCase);
exports.deleteContractController = deleteContractController;
