"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePilotsController = void 0;
class DeletePilotsController {
    constructor(deletePilotsUseCase) {
        this.deletePilotsUseCase = deletePilotsUseCase;
    }
    async deleteByPC(req, res) {
        const { pc } = req.params;
        try {
            await this.deletePilotsUseCase.deleteByPC(pc);
            return res.status(200).json({ msg: 'pilot deleted' });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
    async deleteAll(req, res) {
        try {
            await this.deletePilotsUseCase.deleteAll();
            return res.status(200).json({ msg: 'all pilots were deleted' });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}
exports.DeletePilotsController = DeletePilotsController;
