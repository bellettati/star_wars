"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planetsGraph = exports.planetList = void 0;
const planetList = ['andvari', 'demeter', 'aqua', 'calas'];
exports.planetList = planetList;
const planetsGraph = {
    andvari: [['aqua', 13], ['calas', 23]],
    demeter: [['aqua', 22], ['calas', 25]],
    aqua: [['demeter', 30], ['calas', 12]],
    calas: [['andvari', 20], ['demeter', 25], ['aqua', 15]],
};
exports.planetsGraph = planetsGraph;
