import { Request, Response } from 'express';

import UserService from '../services/users.service';

export const createUser = async (req: Request, res: Response) => {
  const { 
    username,
    vocation,
    level,
    password,
  } = req.body;

  const getTokenByCreatedUser = await UserService.createUser({
    username, vocation, level, password,
  });
  return res.status(201).json({ token: getTokenByCreatedUser });
};

export const getAllUsers = async () => {};
