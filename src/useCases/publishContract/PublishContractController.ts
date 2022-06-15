import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../../providers/errors/HttpException';
import { PublishContractUseCase } from "./PublishContractUseCase";

export class PublishContractController {
  
  constructor(
    private publishContractUseCase: PublishContractUseCase,
  ) {}

  async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
    try {
      this.publishContractUseCase.execute();
      return res.status(200).json({ msg: 'contract has been published' });
    } catch(e: any) {
      next(new HttpException(500, e.message));
    }
  }
}