import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi from 'joi';

const validationMiddleware = (schema: Joi.Schema): RequestHandler => {

  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const validationOptions = {
      abortEarly: true, //aborts on the first error
      allowUnknown: true, //doesn't throw an error because of unknown info
      stripUnknown: true //strips out all unkown info
    }

    try {
      const obj = await schema.validateAsync(req.body, validationOptions);
      req.body = obj;
      next();
    } catch(e: any) {
      const errors: string[] = [];
      e.details.forEach((error: Joi.ValidationErrorItem) => errors.push(error.message));
      res.status(400).json({ errors });
    }
  }

}

export default validationMiddleware;