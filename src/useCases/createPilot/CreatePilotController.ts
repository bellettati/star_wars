import { Request, Response, NextFunction } from 'express';
import { CreatePilotUseCase } from './CreatePilotUseCase';
import { HttpException } from '../../providers/errors/HttpException';

export class CreatePilotController {

  constructor(
    private createPilotUseCase: CreatePilotUseCase,
  ) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { name, age } = req.body;

    try {
      await this.createPilotUseCase.execute({ name, age, credits: 0, location: 'calas' });
      return res.status(201).send();
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }
}