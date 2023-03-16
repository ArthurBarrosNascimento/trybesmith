import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IUser from '../interfaces/users.interface';
import connection from './connection';

const create = async (user: IUser) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?,?,?,?);
  `, [user.username, user.vocation, user.level, user.password]);
  return insertId;
};

const verifyLodin = async (login: IUser) => {
  const [row] = await connection.execute<RowDataPacket[]>(`
  SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;
  `, [login.username, login.password]);
  return row;
}; 

const UserModel = {
  create,
  verifyLodin,
};

export default UserModel;