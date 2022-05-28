import IController from '../../utils/interfaces/controller.interface';
import HttpException from '../../utils/exceptions/http.exception';
import validationMiddleware from '../../middleware/validation.middleware';
import validation from './travel.validation';
import { Request, Response, NextFunction, Router } from 'express';
import ShipService from '../ship/ship.service';
import PilotService from '../pilot/pilot.service';
import findPath from '../../utils/travellingAlgo';

class TravelController implements IController {

  public path = '/travels';
  public router = Router();

  private shipService = new ShipService();
  private pilotService = new PilotService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = (): void => {
    this.router.put(this.path, validationMiddleware(validation.travel), this.travel)
    this.router.get(`${this.path}/ship/:pc`, this.getShip)
  }

  private travel = async (
    req: Request,
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { pc, planet } = req.body;
      const pilot = await this.pilotService.findByPC(pc);
      const usedFuel = findPath(pilot.location, planet);
      await this.pilotService.updateLocation(pc, planet);
      await this.shipService.updateFuelLevel(pilot._id, usedFuel);
      res.status(200).json({ msg: 'travel was a success' });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }

  private getShip = async (
    req: Request,
    res: Response, 
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const pilot = await this.pilotService.findByPC(Number(req.params.pc));
      const ship = await this.shipService.getShip(pilot._id);
      return res.status(200).json({ ship });
    } catch(e: any) {
      next(new HttpException(400, e.message));
    }
  }
}

export default TravelController;
