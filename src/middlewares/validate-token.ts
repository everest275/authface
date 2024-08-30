import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config/token';

//Auth Required
interface AuthRequest extends Request {
    user?: string | JwtPayload;
  }
export const authRequired = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const { token } = req.cookies;

  
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