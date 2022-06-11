"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilot = void 0;
const uuid_1 = require("uuid");
class Pilot {
    constructor(props) {
        this.pilotCertification = (0, uuid_1.v4)();
        Object.assign(this, props);
    }
}
exports.Pilot = Pilot;
