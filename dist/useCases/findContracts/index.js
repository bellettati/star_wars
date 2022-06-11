"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findContractController = void 0;
const MongoContractRepository_1 = require("../../repositories/implementations/MongoContractRepository");
const FindContractUseCase_1 = require("./FindContractUseCase");
const FindContractController_1 = require("./FindContractController");
const findContractUseCase = new FindContractUseCase_1.FindContractUseCase(new MongoContractRepository_1.MongoContractRepository());
const findContractController = new FindContractController_1.FindContractController(findContractUseCase);
exports.findContractController = findContractController;
