"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shipModel = exports.shipSchema = void 0;
const mongoose_1 = require("mongoose");
const shipSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    fuelCapacity: { type: Number, required: true },
    fuelLevel: { type: Number, required: true },
    weightCapacity: { type: Number, required: true },
    pilotId: { type: String, ref: 'Pilot' }
}, { timestamps: true });
exports.shipSchema = shipSchema;
const shipModel = (0, mongoose_1.model)('Ship', shipSchema);
exports.shipModel = shipModel;
