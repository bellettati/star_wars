"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractModel = void 0;
const mongoose_1 = require("mongoose");
const contractSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    description: { type: String, required: true },
    payload: { type: [Object], required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    value: { type: Number, required: true },
    isOpen: { type: Boolean, default: true }
}, { timestamps: true });
const contractModel = (0, mongoose_1.model)('Contract', contractSchema);
exports.contractModel = contractModel;
