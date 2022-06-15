"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContractController = void 0;
const HttpException_1 = require("../../providers/errors/HttpException");
class DeleteContractController {
    constructor(deleteContractsUseCase) {
        this.deleteContractsUseCase = deleteContractsUseCase;
    }
    async deleteById(req, res, next) {
        try {
            const { id } = req.params;
            await this.deleteContractsUseCase.deleteById(id);
            return res.status(200).json({ msg: 'contract deleted' });
        }
        catch (e) {
            next(new HttpException_1.HttpException(400, e.message));
        }
    }
    async deleteAll(req, res, next) {
        try {
            await this.deleteContractsUseCase.deleteAll();
            return res.status(200).json({ msg: ' all contracts were deleted' });
        }
        catch (e) {
            next(new HttpException_1.HttpException(500, e.message));
        }
    }
}
exports.DeleteContractController = DeleteContractController;
