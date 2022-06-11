"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindPilotsController = void 0;
class FindPilotsController {
    constructor(findPilotUseCase) {
        this.findPilotUseCase = findPilotUseCase;
    }
    async findAll(req, res) {
        try {
            const pilots = await this.findPilotUseCase.findAll();
            return res.status(200).json({ pilots });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
    async findOne(req, res) {
        try {
            const { pc } = req.params;
            const pilot = await this.findPilotUseCase.findByPC(pc);
            return res.status(200).json({ pilot });
        }
        catch (e) {
            return res.status(400).json({ err: e.message });
        }
    }
}
exports.FindPilotsController = FindPilotsController;
