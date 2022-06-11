"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindContractUseCase = void 0;
class FindContractUseCase {
    constructor(contractRepository) {
        this.contractRepository = contractRepository;
    }
    async findById(id) {
        try {
            return await this.contractRepository.findById(id);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async findAll() {
        try {
            const contracts = await this.contractRepository.findAll();
            return contracts;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}
exports.FindContractUseCase = FindContractUseCase;
