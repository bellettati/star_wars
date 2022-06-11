"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pilotModel = void 0;
const mongoose_1 = require("mongoose");
const pilotSchema = new mongoose_1.Schema({
    pilotCertification: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    credits: { type: Number, default: 0 },
    location: { type: String, default: 'earth' }
}, { timestamps: true });
const pilotModel = (0, mongoose_1.model)('Pilot', pilotSchema);
exports.pilotModel = pilotModel;
