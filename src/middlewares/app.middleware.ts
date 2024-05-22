import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config/app.config';

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
      res.status(400).json({ errors: error.errors });
    } else {
      next(error);
    }
  }
};
interface AuthRequest extends Request {
  user?: string | JwtPayload;
}

//Auth Required
export const authRequired = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const { token } = req.cookies;
  console.log(token);

  if (!token) {
      res.status(401).json({ message: "No token, authorization denied" });
      return;
  }

  jwt.verify(token, TOKEN_SECRET, (err:any, user:any) => {
      if (err) {
          res.status(403).json({ message: "Invalid token" });
          return;
      }
      req.user = user;
      next();
  });
};

