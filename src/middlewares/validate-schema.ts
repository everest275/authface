import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

//Validate Schema
export const validateSchema = (schema: ZodSchema) => (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json(error.errors.map((error)=> error.message));
    } else {
      next(error);
    }
  }
};
