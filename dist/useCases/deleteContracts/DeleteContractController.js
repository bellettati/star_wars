"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContractController = void 0;
class DeleteContractController {
    constructor(deleteContractsUseCase) {
        this.deleteContractsUseCase = deleteContractsUseCase;
    }
    async deleteById(req, res) {
        try {
            const { id } = req.params;
            await this.deleteContractsUseCase.deleteById(id);
            return res.status(200).json({ msg: 'contract deleted' });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
    async deleteAll(req, res) {
        try {
            await this.deleteContractsUseCase.deleteAll();
            return res.status(200).json({ msg: ' all contracts were deleted' });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}
exports.DeleteContractController = DeleteContractController;
