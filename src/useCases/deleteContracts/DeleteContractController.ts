import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../../providers/errors/HttpException';
import { DeleteContractsUseCase } from './DeleteContractsUseCase';

export class DeleteContractController {

  constructor(
    private deleteContractsUseCase: DeleteContractsUseCase
  ) {}

  async deleteById(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } =  req.params;
      await this.deleteContractsUseCase.deleteById(id);
      return res.status(200).json({ msg: 'contract deleted' });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }

  async deleteAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      await this.deleteContractsUseCase.deleteAll();
      return res.status(200).json({ msg: ' all contracts were deleted' });
    } catch(e: any) {
      next(new HttpException(500, e.message));
    }
  }
}