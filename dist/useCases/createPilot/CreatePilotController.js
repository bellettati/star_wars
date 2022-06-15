"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePilotController = void 0;
const HttpException_1 = require("../../providers/errors/HttpException");
class CreatePilotController {
    constructor(createPilotUseCase) {
        this.createPilotUseCase = createPilotUseCase;
    }
    async handle(req, res, next) {
        const { name, age } = req.body;
        try {
            await this.createPilotUseCase.execute({ name, age, credits: 0, location: 'calas' });
            return res.status(201).send();
        }
        catch (e) {
            next(new HttpException_1.HttpException(400, e.message));
        }
    }
}
exports.CreatePilotController = CreatePilotController;
