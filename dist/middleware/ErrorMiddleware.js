"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (error, req, res, next) => {
    const status = error.status;
    const message = error.message;
    console.log('hey');
    return res.status(status).json({ message });
};
exports.errorMiddleware = errorMiddleware;
