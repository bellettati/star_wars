"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishContractController = void 0;
const HttpException_1 = require("../../providers/errors/HttpException");
class PublishContractController {
    constructor(publishContractUseCase) {
        this.publishContractUseCase = publishContractUseCase;
    }
    async handle(req, res, next) {
        try {
            this.publishContractUseCase.execute();
            return res.status(200).json({ msg: 'contract has been published' });
        }
        catch (e) {
            next(new HttpException_1.HttpException(500, e.message));
        }
    }
}
exports.PublishContractController = PublishContractController;
