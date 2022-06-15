"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const envalid_1 = require("envalid");
const validateEnv = () => {
    (0, envalid_1.cleanEnv)(process.env, {
        NODE_ENV: (0, envalid_1.str)({ choices: ['development', 'production'] }),
        MONGO_PATH: (0, envalid_1.str)(),
        PORT: (0, envalid_1.port)({ default: 3000 })
    });
};
exports.validateEnv = validateEnv;
