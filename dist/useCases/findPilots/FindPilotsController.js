"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindPilotsController = void 0;
const HttpException_1 = require("../../providers/errors/HttpException");
class FindPilotsController {
    constructor(findPilotUseCase) {
        this.findPilotUseCase = findPilotUseCase;
    }
    async findAll(req, res, next) {
        try {
            const pilots = await this.findPilotUseCase.findAll();
            return res.status(200).json({ pilots });
        }
        catch (e) {
            next(new HttpException_1.HttpException(500, e.message));
        }
    }
    async findOne(req, res, next) {
        try {
            const { pc } = req.params;
            const pilot = await this.findPilotUseCase.findByPC(pc);
            return res.status(200).json({ pilot });
        }
        catch (e) {
            next(new HttpException_1.HttpException(400, e.message));
        }
    }
}
exports.FindPilotsController = FindPilotsController;
