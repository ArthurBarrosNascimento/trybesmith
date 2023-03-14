import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

import IUser from '../interfaces/users.interface';

dotenv.config();

const { JWT_SECRET } = process.env;

const JWT_CONFIG: SignOptions = { algorithm: 'HS256', expiresIn: '7d' };

const geraToken = (payload: IUser) => {
  const token = jwt.sign(payload, JWT_SECRET as string, JWT_CONFIG);
  return token;
};

export default geraToken;