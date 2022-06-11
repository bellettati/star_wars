import { Request, Response } from 'express';
import { CreatePilotUseCase } from './CreatePilotUseCase';

export class CreatePilotController {

  constructor(
    private createPilotUseCase: CreatePilotUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, age } = req.body;

    try {
      await this.createPilotUseCase.execute({ name, age, credits: 0, location: 'calas' });
      return res.status(201).send();
    } catch(e: any) {
      res.status(400).json({ error: e.message || 'unexpected error' });
    }
  }
}