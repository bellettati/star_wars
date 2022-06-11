"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishContractController = void 0;
class PublishContractController {
    constructor(publishContractUseCase) {
        this.publishContractUseCase = publishContractUseCase;
    }
    async handle(req, res) {
        try {
            this.publishContractUseCase.execute();
            return res.status(200).json({ msg: 'contract has been published' });
        }
        catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}
exports.PublishContractController = PublishContractController;
