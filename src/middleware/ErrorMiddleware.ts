import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../providers/errors/HttpException';

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction): Response => {

  const status = error.status;
  const message = error.message;

  console.log('hey');
  return res.status(status).json({ message });
}