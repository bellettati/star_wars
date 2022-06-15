import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../../providers/errors/HttpException';
import { DeletePilotsUseCase } from './DeletePilotsUseCase';

export class DeletePilotsController {

  constructor(
    private deletePilotsUseCase: DeletePilotsUseCase
  ) {}

  async deleteByPC(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { pc } = req.params;
    try {
      await this.deletePilotsUseCase.deleteByPC(pc);
      return res.status(200).json({ msg: 'pilot deleted' });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    } 
  }

  async deleteAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
      try {
        await this.deletePilotsUseCase.deleteAll();
        return res.status(200).json({ msg: 'all pilots were deleted' });
      } catch(e: any) {
        next(new HttpException(500, e.message));
      }
  }
}