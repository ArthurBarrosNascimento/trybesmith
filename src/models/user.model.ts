import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/users.interface';
import connection from './connection';

const create = async (user: IUser) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?,?,?,?);
  `, [user.username, user.vocation, user.level, user.password]);
  return insertId;
};

const UserModel = {
  create,
};

export default UserModel;