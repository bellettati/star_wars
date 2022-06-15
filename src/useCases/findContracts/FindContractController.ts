import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../../providers/errors/HttpException';
import { FindContractUseCase } from './FindContractUseCase';

export class FindContractController {

  constructor(
    private findContractUseCase: FindContractUseCase
  ) {}

  async findById(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = req.params;
      const contract = await this.findContractUseCase.findById(id);
      return res.status(200).json({ contract });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const contracts = await this.findContractUseCase.findAll();
      return res.status(200).json({ contracts });
    } catch(e: any) {
      next(new HttpException(500, e.message));
    }
  }
}