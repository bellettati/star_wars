import { Router, Request, Response, NextFunction } from 'express';
import IController from '../../utils/interfaces/controller.interface';
import HttpException from '../../utils/exceptions/http.exception';
import validationMiddleware from '../../middleware/validation.middleware';
import validate from './pilot.validation';
import PilotService from './pilot.service';

class PilotController implements IController {

  public path = '/pilots';
  public router = Router();

  private service = new PilotService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = (): void => {
    this.router.get(this.path, this.findAll);
    this.router.get(`${this.path}/:pc`, this.findByPC);
    this.router.post(this.path, validationMiddleware(validate.create), this.create);
    this.router.delete(`${this.path}/:pc`, this.deleteByPC);
    this.router.delete(this.path, this.deleteAll);
  }

  private findAll = async (
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<Response> => {
    const pilots = await this.service.findAll();
    return res.status(200).json({ pilots });
  }

  private findByPC = async (
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const pc = Number(req.params.pc);
      const pilot = await this.service.findByPC(pc);
      return res.status(200).json({ pilot });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    } 
  }

  private create = async (
    req: Request,
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { name, age } = req.body;
      const pilot = await this.service.create(name, age);
      return res.status(201).json({ pilot });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }

  private deleteByPC = async (
    req: Request, 
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const pc = Number(req.params.pc);
      const pilot = await this.service.deleteByPC(pc);
      return res.status(200).json({ pilot });
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
      const message = await this.service.deleteAll();
      return res.status(200).json({ message });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }
}

export default PilotController;