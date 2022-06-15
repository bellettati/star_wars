"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
const ValidateEnv_1 = require("./providers/ValidateEnv");
(0, ValidateEnv_1.validateEnv)();
mongoose_1.default.connect(process.env.MONGO_PATH, () => console.log('connected to DB'));
app_1.app.listen(Number(process.env.PORT), () => console.log(`server listening on port ${process.env.PORT}`));
