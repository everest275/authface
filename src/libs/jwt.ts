// src/lib/jwtLib.ts
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config/token';

interface Payload {
  [key: string]: any;
}

export function createAccessToken(payload: Payload): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: '1d',
      },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token as string);
        }
      }
    );
  });
}

export const jwtLib = {
  createAccessToken,
};
