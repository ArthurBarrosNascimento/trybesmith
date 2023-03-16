import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import geraToken from '../utils/token';

const verifyLoginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const userLogin = await LoginService.veriFyUser({ username, password });
  if (userLogin.length === 0) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  const getId = userLogin[0].id;
  const payload = {
    id: getId,
    username,
  };
  const token = geraToken(payload);
  return res.status(200).json({ token });
};

export default verifyLoginUser;
