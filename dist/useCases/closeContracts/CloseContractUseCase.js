"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseContractUseCase = void 0;
const travelAlgo_1 = require("../../providers/travelAlgo");
class CloseContractUseCase {
    constructor(contractRepository, pilotRepository, shipRepository) {
        this.contractRepository = contractRepository;
        this.pilotRepository = pilotRepository;
        this.shipRepository = shipRepository;
    }
    async execute(contractId) {
        try {
            const contract = await this.contractRepository
                .findById(contractId);
            const { origin, destination } = contract;
            const availablePilots = await this.pilotRepository
                .findPilotsOnPlanet(origin);
            if (availablePilots.length <= 0)
                throw new Error(`no available piots on planet ${origin}`);
            const fuel = (0, travelAlgo_1.findPath)(origin, destination);
            console.log(fuel);
            availablePilots.forEach(async (pilot) => {
                const { pilotCertification } = pilot;
                const ship = await this.shipRepository.findByPilotId(pilotCertification);
                const currFuel = ship.fuelLevel - fuel;
                await this.shipRepository.updateFuelLevel(pilotCertification, currFuel);
            });
            await this.pilotRepository.updateManyLocation(origin, destination);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}
exports.CloseContractUseCase = CloseContractUseCase;
