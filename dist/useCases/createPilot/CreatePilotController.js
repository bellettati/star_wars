"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePilotController = void 0;
class CreatePilotController {
    constructor(createPilotUseCase) {
        this.createPilotUseCase = createPilotUseCase;
    }
    async handle(req, res) {
        const { name, age } = req.body;
        try {
            await this.createPilotUseCase.execute({ name, age, credits: 0, location: 'calas' });
            return res.status(201).send();
        }
        catch (e) {
            res.status(400).json({ error: e.message || 'unexpected error' });
        }
    }
}
exports.CreatePilotController = CreatePilotController;
