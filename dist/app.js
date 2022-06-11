"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const PilotRoutes_1 = __importDefault(require("./routes/PilotRoutes"));
const ContractRoutes_1 = __importDefault(require("./routes/ContractRoutes"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//routes
app.use('/pilots', PilotRoutes_1.default);
app.use('/contracts', ContractRoutes_1.default);
