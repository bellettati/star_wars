"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishContractController = void 0;
const MongoContractRepository_1 = require("../../repositories/implementations/MongoContractRepository");
const PublishContractUseCase_1 = require("./PublishContractUseCase");
const PublishContractController_1 = require("./PublishContractController");
const publishContractUseCase = new PublishContractUseCase_1.PublishContractUseCase(new MongoContractRepository_1.MongoContractRepository());
const publishContractController = new PublishContractController_1.PublishContractController(publishContractUseCase);
exports.publishContractController = publishContractController;
