"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseContractController = void 0;
class CloseContractController {
    constructor(closeContractUseCase) {
        this.closeContractUseCase = closeContractUseCase;
    }
    async handle(req, res) {
        try {
            const { contractId } = req.params;
            await this.closeContractUseCase.execute(contractId);
            return res.status(200).json({ msg: 'pilots location and fuelLevel updated successfully' });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}
exports.CloseContractController = CloseContractController;
