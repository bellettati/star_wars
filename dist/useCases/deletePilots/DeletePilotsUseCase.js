"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePilotsUseCase = void 0;
class DeletePilotsUseCase {
    constructor(pilotRepository) {
        this.pilotRepository = pilotRepository;
    }
    async deleteByPC(pc) {
        try {
            await this.pilotRepository.deleteByPC(pc);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async deleteAll() {
        try {
            await this.pilotRepository.deleteAll();
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}
exports.DeletePilotsUseCase = DeletePilotsUseCase;
