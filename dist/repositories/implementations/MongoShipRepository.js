"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoShipRepository = void 0;
const ShipModel_1 = require("./models/ShipModel");
class MongoShipRepository {
    async updateManyFuelLevel(pilotId, fuelLevel) {
        try {
        }
        catch (e) {
        }
    }
    async findAll() {
        try {
            const ships = await ShipModel_1.shipModel.find({});
            return ships;
        }
        catch (e) {
            throw new Error('unable to find ships');
        }
    }
    async findById(id) {
        try {
            const ship = await ShipModel_1.shipModel.findOne({ id });
            if (!ship)
                throw new Error('ship not found');
            return ship;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async findByPilotId(pilotId) {
        try {
            const ship = await ShipModel_1.shipModel.findOne({ pilotId });
            if (!ship)
                throw new Error('ship not found');
            return ship;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async save(ship) {
        try {
            await ShipModel_1.shipModel.create(ship);
        }
        catch (e) {
            throw new Error('unable to create ship');
        }
    }
    async updateFuelLevel(pilotId, fuelLevel) {
        try {
            await ShipModel_1.shipModel.findOneAndUpdate({ pilotId }, { fuelLevel });
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}
exports.MongoShipRepository = MongoShipRepository;
