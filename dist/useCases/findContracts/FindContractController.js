"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindContractController = void 0;
const HttpException_1 = require("../../providers/errors/HttpException");
class FindContractController {
    constructor(findContractUseCase) {
        this.findContractUseCase = findContractUseCase;
    }
    async findById(req, res, next) {
        try {
            const { id } = req.params;
            const contract = await this.findContractUseCase.findById(id);
            return res.status(200).json({ contract });
        }
        catch (e) {
            next(new HttpException_1.HttpException(400, e.message));
        }
    }
    async findAll(req, res, next) {
        try {
            const contracts = await this.findContractUseCase.findAll();
            return res.status(200).json({ contracts });
        }
        catch (e) {
            next(new HttpException_1.HttpException(500, e.message));
        }
    }
}
exports.FindContractController = FindContractController;
