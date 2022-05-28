import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/exceptions/http.exception';

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {

  const status = error.status;
  const message = error.message;

  res.status(status).json({ status, message });
}

export default errorMiddleware;