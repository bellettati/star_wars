import { Request, Response } from 'express';
import { FindContractUseCase } from './FindContractUseCase';

export class FindContractController {

  constructor(
    private findContractUseCase: FindContractUseCase
  ) {}

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const contract = await this.findContractUseCase.findById(id);
      return res.status(200).json({ contract });
    } catch(e: any) {
      return res.status(400).json({ error: e.message });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const contracts = await this.findContractUseCase.findAll();
      return res.status(200).json({ contracts });
    } catch(e: any) {
      return res.status(400).json({ error: e.message });
    }
  }
}