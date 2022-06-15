import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../../providers/errors/HttpException';
import { CloseContractUseCase } from './CloseContractUseCase';

export class CloseContractController {

  constructor(
    private closeContractUseCase: CloseContractUseCase
  ) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { contractId } = req.params;
      await this.closeContractUseCase.execute(contractId);
      return res.status(200).json({ msg: 'pilots location and fuelLevel updated successfully' });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }
}