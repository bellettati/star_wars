"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishContractUseCase = void 0;
const Planets_1 = require("../../providers/Planets");
const uuid_1 = require("uuid");
const Contract_1 = require("../../entities/Contract");
class PublishContractUseCase {
    constructor(contractRepository) {
        this.contractRepository = contractRepository;
        this.random = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
    }
    async execute() {
        try {
            // const origin = planetList[Math.floor(Math.random() * planetList.length)];
            const origin = 'calas';
            const availablePlanets = Planets_1.planetList.filter((planet) => planet !== origin);
            const destination = availablePlanets[Math.floor(Math.random() * availablePlanets.length)];
            const payload = [
                { resource: "water", amount: this.random(100, 500) },
                { resource: "food", amount: this.random(100, 500) },
                { resource: "minerals", amount: this.random(100, 500) },
            ];
            let value = 0;
            payload.forEach((res) => (value += res.amount * 5));
            const description = `${payload[0].amount} tons of ${payload[0].resource}, ${payload[1].amount} tons of ${payload[1].resource} and ${payload[2].amount} tons of ${payload[2].resource} exported from ${origin} to ${destination}.`;
            const id = (0, uuid_1.v4)();
            const contract = new Contract_1.Contract({ id, description, payload, origin, destination, value });
            await this.contractRepository.publishContract(contract);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}
exports.PublishContractUseCase = PublishContractUseCase;
