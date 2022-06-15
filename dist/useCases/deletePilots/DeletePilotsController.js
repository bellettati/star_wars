"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePilotsController = void 0;
const HttpException_1 = require("../../providers/errors/HttpException");
class DeletePilotsController {
    constructor(deletePilotsUseCase) {
        this.deletePilotsUseCase = deletePilotsUseCase;
    }
    async deleteByPC(req, res, next) {
        const { pc } = req.params;
        try {
            await this.deletePilotsUseCase.deleteByPC(pc);
            return res.status(200).json({ msg: 'pilot deleted' });
        }
        catch (e) {
            next(new HttpException_1.HttpException(400, e.message));
        }
    }
    async deleteAll(req, res, next) {
        try {
            await this.deletePilotsUseCase.deleteAll();
            return res.status(200).json({ msg: 'all pilots were deleted' });
        }
        catch (e) {
            next(new HttpException_1.HttpException(500, e.message));
        }
    }
}
exports.DeletePilotsController = DeletePilotsController;
