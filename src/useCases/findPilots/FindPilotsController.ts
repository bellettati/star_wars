import { Request, Response } from 'express';
import { FindPilotUseCase } from './FindPilotUseCase';

export class FindPilotsController {

  constructor(
    private findPilotUseCase: FindPilotUseCase,
  ) {}

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const pilots = await this.findPilotUseCase.findAll();
      return res.status(200).json({ pilots });
    } catch(e: any) {
      return res.status(400).json({ error: e.message });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const { pc } = req.params;
      const pilot = await this.findPilotUseCase.findByPC(pc);
      return res.status(200).json({ pilot });
    } catch(e: any) {
      return res.status(400).json({ err: e.message });
    }
  }
}