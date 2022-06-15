import { NextFunction, Request, Response, Router } from 'express';
import { createPilotController } from '../useCases/createPilot/index';
import { findPilotController } from '../useCases/findPilots/index';
import { deletePilotsController } from '../useCases/deletePilots/index';

const router = Router();

// create pilot
router.post('/', (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return createPilotController.handle(req, res, next);
});

// get all pilots
router.get('/all', (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return findPilotController.findAll(req, res, next);
});

// find one
router.get('/:pc', (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return findPilotController.findOne(req, res, next);
});

// delete pilot by pc
router.delete('/delete/:pc', (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return deletePilotsController.deleteByPC(req, res, next);
});

router.delete('/delete', (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return deletePilotsController.deleteAll(req, res, next);
});

export default router;