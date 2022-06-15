"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseContractController = void 0;
const HttpException_1 = require("../../providers/errors/HttpException");
class CloseContractController {
    constructor(closeContractUseCase) {
        this.closeContractUseCase = closeContractUseCase;
    }
    async handle(req, res, next) {
        try {
            const { contractId } = req.params;
            await this.closeContractUseCase.execute(contractId);
            return res.status(200).json({ msg: 'pilots location and fuelLevel updated successfully' });
        }
        catch (e) {
            next(new HttpException_1.HttpException(400, e.message));
        }
    }
}
exports.CloseContractController = CloseContractController;
