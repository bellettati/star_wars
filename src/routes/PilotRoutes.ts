import { Request, Response, Router } from 'express';
import { createPilotController } from '../useCases/createPilot/index';
import { findPilotController } from '../useCases/findPilots/index';
import { deletePilotsController } from '../useCases/deletePilots/index';

const router = Router();

// create pilot
router.post('/', (req: Request, res: Response): Promise<Response> => {
  return createPilotController.handle(req, res);
});

// get all pilots
router.get('/all', (req: Request, res: Response): Promise<Response> => {
  return findPilotController.findAll(req, res);
});

// find one
router.get('/:pc', (req: Request, res: Response): Promise<Response> => {
  return findPilotController.findOne(req, res);
});

// delete pilot by pc
router.delete('/delete/:pc', (req: Request, res: Response): Promise<Response> => {
  return deletePilotsController.deleteByPC(req, res);
});

router.delete('/delete', (req: Request, res: Response): Promise<Response> => {
  return deletePilotsController.deleteAll(req, res);
});

export default router;