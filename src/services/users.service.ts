import IUser from '../interfaces/users.interface';
import UserModel from '../models/user.model';
import geraToken from '../utils/token';

const createUser = async (user: IUser) => {
  const getIdUserCreated = await UserModel.create(user);
  const payload = {
    id: getIdUserCreated,
    username: user.username,
  };
  const token = geraToken(payload);
  return token;
};

const UserService = {
  createUser,
};

export default UserService;