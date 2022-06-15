import { Request, Response, NextFunction, Router } from 'express';
import { publishContractController } from '../useCases/publishContract/index';
import { findContractController } from '../useCases/findContracts/index';
import { deleteContractController } from '../useCases/deleteContracts/index';
import { closeContractController } from '../useCases/closeContracts/index';

const router = Router();

// publish contract
router.post('/', (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return publishContractController.handle(req, res, next);
});

// get all contracts
router.get('/all', (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return findContractController.findAll(req, res, next);
});

// find by id
router.get('/:id', (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return findContractController.findById(req, res, next);
});

// close contract
router.put('/:contractId', (req: Request, res: Response, next: NextFunction) => {
  return closeContractController.handle(req, res, next);
})

// delete all
router.delete('/all', (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return deleteContractController.deleteAll(req, res, next);
})

//delete by id
router.delete('/:id', (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return deleteContractController.deleteById(req, res, next);
})



export default router;