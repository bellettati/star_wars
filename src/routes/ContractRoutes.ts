import { Request, Response, Router } from 'express';
import { publishContractController } from '../useCases/publishContract/index';
import { findContractController } from '../useCases/findContracts/index';
import { deleteContractController } from '../useCases/deleteContracts/index';
import { closeContractController } from '../useCases/closeContracts/index';

const router = Router();

// publish contract
router.post('/', (req: Request, res: Response): Promise<Response> => {
  return publishContractController.handle(req, res);
});

// get all contracts
router.get('/all', (req: Request, res: Response): Promise<Response> => {
  return findContractController.findAll(req, res);
});

// find by id
router.get('/:id', (req: Request, res: Response): Promise<Response> => {
  return findContractController.findById(req, res);
});

// close contract
router.put('/:contractId', (req: Request, res: Response) => {
  return closeContractController.handle(req, res);
})

// delete all
router.delete('/all', (req: Request, res: Response): Promise<Response> => {
  return deleteContractController.deleteAll(req, res);
})

//delete by id
router.delete('/:id', (req: Request, res: Response): Promise<Response> => {
  return deleteContractController.deleteById(req, res);
})



export default router;