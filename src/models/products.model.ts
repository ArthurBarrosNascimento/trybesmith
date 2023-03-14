import { RowDataPacket, ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/products.interface';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute<IProduct[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products; 
  `);

  return products;
};

const create = async (product: IProduct) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)
  `, [product.name, product.amount]);

  return insertId;
};

const getProductById = async (id: number) => {
  const [[productById]] = await connection.execute<RowDataPacket[]>(`
    SELECT id, name, amount FROM Trybesmith.products WHERE id = ?
  `, [id]);

  return productById;
};

const ProductModel = {
  getAll,
  create,
  getProductById,
};

export default ProductModel;