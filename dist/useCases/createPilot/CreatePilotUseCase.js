"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePilotUseCase = void 0;
const Pilot_1 = require("../../entities/Pilot");
const Ship_1 = require("../../entities/Ship");
const uuid_1 = require("uuid");
class CreatePilotUseCase {
    constructor(pilotRepository) {
        this.pilotRepository = pilotRepository;
    }
    async execute(data) {
        try {
            if (data.age < 18)
                throw new Error('has to be 18 or older to be pilot');
            const pilot = new Pilot_1.Pilot(data);
            const ship = new Ship_1.Ship({
                id: (0, uuid_1.v4)(),
                fuelCapacity: 100,
                fuelLevel: 100,
                weightCapacity: 400,
                pilotId: pilot.pilotCertification
            });
            pilot.ship = ship;
            await this.pilotRepository.save(pilot);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}
exports.CreatePilotUseCase = CreatePilotUseCase;
