"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindPilotUseCase = void 0;
class FindPilotUseCase {
    constructor(pilotRepository) {
        this.pilotRepository = pilotRepository;
    }
    async findAll() {
        try {
            const pilots = await this.pilotRepository.findAll();
            if (pilots.length <= 0)
                return 'there are no pilots';
            return pilots;
        }
        catch (e) {
            throw new Error(e.message || 'something went wrong with getting all pilots');
        }
    }
    async findByPC(pc) {
        try {
            const pilot = await this.pilotRepository.findByPC(pc);
            if (!pilot)
                throw new Error('pilot not found');
            return pilot;
        }
        catch (e) {
            throw new Error(e.message || 'something went with getting one pilot');
        }
    }
}
exports.FindPilotUseCase = FindPilotUseCase;
