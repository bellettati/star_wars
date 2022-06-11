"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContractsUseCase = void 0;
class DeleteContractsUseCase {
    constructor(contractRepository) {
        this.contractRepository = contractRepository;
    }
    async deleteById(id) {
        try {
            await this.contractRepository.deleteById(id);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async deleteAll() {
        try {
            await this.contractRepository.deleteAll();
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}
exports.DeleteContractsUseCase = DeleteContractsUseCase;
