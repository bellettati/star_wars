import { Request, Response } from 'express';
import { CloseContractUseCase } from './CloseContractUseCase';

export class CloseContractController {

  constructor(
    private closeContractUseCase: CloseContractUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { contractId } = req.params;
      await this.closeContractUseCase.execute(contractId);
      return res.status(200).json({ msg: 'pilots location and fuelLevel updated successfully' });
    } catch(e: any) {
      return res.status(400).json({ error: e.message });
    }
  }
}