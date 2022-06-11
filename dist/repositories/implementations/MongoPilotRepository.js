"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoPilotRepository = void 0;
const PilotModel_1 = require("./models/PilotModel");
const ShipModel_1 = require("./models/ShipModel");
class MongoPilotRepository {
    async findAll() {
        try {
            return await PilotModel_1.pilotModel.find({});
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async findByPC(pc) {
        try {
            const pilot = await PilotModel_1.pilotModel.findOne({ pilotCertification: pc }).populate('ship');
            if (!pilot) {
                throw new Error('pilot not found');
            }
            await PilotModel_1.pilotModel.where();
            return pilot;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async findPilotsOnPlanet(location) {
        try {
            const pilots = await PilotModel_1.pilotModel.find({ location });
            return pilots;
        }
        catch (e) {
            throw new Error(`unable to find pilots`);
        }
    }
    async save(pilot) {
        try {
            const ship = await ShipModel_1.shipModel.create(pilot.ship);
            await PilotModel_1.pilotModel.create(Object.assign(Object.assign({}, pilot), { ship: ship._id }));
        }
        catch (e) {
            console.log(e.message);
            throw new Error('unable to create pilot');
        }
    }
    async updateLocation(pc, planet) {
        try {
            const pilot = await this.findByPC(pc);
            await PilotModel_1.pilotModel.updateOne({ pilotCertification: pilot.pilotCertification }, { $set: { location: planet } });
        }
        catch (e) {
            throw new Error('unable to update pilot location');
        }
    }
    async updateManyLocation(origin, destination) {
        try {
            await PilotModel_1.pilotModel.updateMany({ location: origin }, { $set: { location: destination } });
        }
        catch (e) {
            throw new Error('unable to update pilots locations');
        }
    }
    async deleteByPC(pc) {
        try {
            const pilot = await this.findByPC(pc);
            await PilotModel_1.pilotModel.deleteOne({ pilotCertification: pilot.pilotCertification });
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    async deleteAll() {
        try {
            await PilotModel_1.pilotModel.deleteMany({});
        }
        catch (e) {
            throw new Error('unable to delete pilots');
        }
    }
}
exports.MongoPilotRepository = MongoPilotRepository;
