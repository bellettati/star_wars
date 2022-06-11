import { Request, Response } from 'express';
import { DeletePilotsUseCase } from './DeletePilotsUseCase';

export class DeletePilotsController {

  constructor(
    private deletePilotsUseCase: DeletePilotsUseCase
  ) {}

  async deleteByPC(req: Request, res: Response): Promise<Response> {
    const { pc } = req.params;
    try {
      await this.deletePilotsUseCase.deleteByPC(pc);
      return res.status(200).json({ msg: 'pilot deleted' });
    } catch(e: any) {
      return res.status(400).json({ error: e.message });
    } 
  }

  async deleteAll(req: Request, res: Response): Promise<Response> {
      try {
        await this.deletePilotsUseCase.deleteAll();
        return res.status(200).json({ msg: 'all pilots were deleted' });
      } catch(e: any) {
        return res.status(400).json({ error: e.message });
      }
  }
}