import IProduct from '../interfaces/products.interface';
import ProductModel from '../models/products.model';

const getAllPorducts = async (): Promise<IProduct[]> => {
  const allProducts = await ProductModel.getAll();
  return allProducts;
};

const createProduct = async (product: IProduct) => {
  const productCreate = await ProductModel.create(product);
  return productCreate;
};

const getProductById = async (id:number) => {
  const getById = await ProductModel.getProductById(id);
  return getById;
};

const ProductService = {
  createProduct,
  getAllPorducts,
  getProductById,
};

export default ProductService;