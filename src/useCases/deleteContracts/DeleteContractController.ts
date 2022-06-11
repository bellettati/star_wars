import { Request, Response } from 'express';
import { DeleteContractsUseCase } from './DeleteContractsUseCase';

export class DeleteContractController {

  constructor(
    private deleteContractsUseCase: DeleteContractsUseCase
  ) {}

  async deleteById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } =  req.params;
      await this.deleteContractsUseCase.deleteById(id);
      return res.status(200).json({ msg: 'contract deleted' });
    } catch(e: any) {
      return res.status(400).json({ error: e.message });
    }
  }

  async deleteAll(req: Request, res: Response): Promise<Response> {
    try {
      await this.deleteContractsUseCase.deleteAll();
      return res.status(200).json({ msg: ' all contracts were deleted' });
    } catch(e: any) {
      return res.status(400).json({ error: e.message });
    }
  }
}