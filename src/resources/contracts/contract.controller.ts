import { Request, Response, NextFunction, Router } from 'express';
import IController from '../../utils/interfaces/controller.interface';
import IContract from './contract.interface';
import HttpException from '../../utils/exceptions/http.exception';
import ContractService from './contract.service';

class ContractController implements IController {

  public path = '/contracts';
  public router = Router();

  private service = new ContractService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = (): void => {
    this.router.post(this.path, this.generateContract);
    this.router.get(this.path, this.getAll);
    this.router.get(`${this.path}/open`, this.getOpenContracts);
    this.router.delete(this.path, this.deleteAll);
  } 

  private generateContract = async (
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const contract = await this.service.generate();
      return res.status(201).json({ contract });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const contracts = await this.service.getAll();
      return res.status(200).json({ contracts });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }

  private getOpenContracts = async (
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const openContracts = await this.service.getOpenContracts();
      return res.status(200).json({ openContracts });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }

  private deleteAll = async (
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const message = this.service.deleteAll();
      return res.status(200).json({ message });
    } catch(e) {
      next(new HttpException(400, e.message));
    }
  }
}

export default ContractController;
