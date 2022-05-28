import { Request, Response, NextFunction, Router } from 'express';
import ContractService from './contracts/contract.service';
import IController from '../utils/interfaces/controller.interface';

class TestController implements IController {

  public path = '/tests';
  public router = Router();

  private contractService = new ContractService();

  constructor() { this.initializeRoutes() }

  private initializeRoutes = (): void => {
    this.router.post(`${this.path}/contract`, async (req: Request, res: Response) => {
      const contract = await this.contractService.generate();
      res.status(200).json({ contract });
    });
  } 
}

export default TestController;