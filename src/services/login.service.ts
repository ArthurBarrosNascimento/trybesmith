import IUser from '../interfaces/users.interface';
import UserModel from '../models/user.model';

const veriFyUser = async (Login: IUser) => {
  const user = await UserModel.verifyLodin(Login);
  console.log();
  return user;
};

const LoginService = { veriFyUser };

export default LoginService;
