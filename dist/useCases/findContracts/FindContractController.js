"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindContractController = void 0;
class FindContractController {
    constructor(findContractUseCase) {
        this.findContractUseCase = findContractUseCase;
    }
    async findById(req, res) {
        try {
            const { id } = req.params;
            const contract = await this.findContractUseCase.findById(id);
            return res.status(200).json({ contract });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
    async findAll(req, res) {
        try {
            const contracts = await this.findContractUseCase.findAll();
            return res.status(200).json({ contracts });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}
exports.FindContractController = FindContractController;
