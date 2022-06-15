import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../../providers/errors/HttpException';
import { FindPilotUseCase } from './FindPilotUseCase';

export class FindPilotsController {

  constructor(
    private findPilotUseCase: FindPilotUseCase,
  ) {}

  async findAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const pilots = await this.findPilotUseCase.findAll();
      return res.status(200).json({ pilots });
    } catch(e: any) {
      next(new HttpException(500, e.message));
    }
  }

  async findOne(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { pc } = req.params;
      const pilot = await this.findPilotUseCase.findByPC(pc);
      return res.status(200).json({ pilot });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }
}