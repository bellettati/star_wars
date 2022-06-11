import { Request, Response } from 'express';
import { PublishContractUseCase } from "./PublishContractUseCase";

export class PublishContractController {
  
  constructor(
    private publishContractUseCase: PublishContractUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      this.publishContractUseCase.execute();
      return res.status(200).json({ msg: 'contract has been published' });
    } catch(e: any) {
      return res.status(400).json({ error: e.message });
    }
  }
}