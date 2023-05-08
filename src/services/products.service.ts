import IProduct from '../interfaces/products.interface';
import ProductModel from '../models/products.model';
import validateUserSchemas from './validations/validateUserSchemas';

const getAllPorducts = async (): Promise<IProduct[]> => {
  const allProducts = await ProductModel.getAll();
  return allProducts;
};

const createProduct = async (product: IProduct) => {
  const errorName = validateUserSchemas.validadeName(product.name);
  if (errorName.type) return errorName;

  const errorNameLength = validateUserSchemas.validateLengthName(product.name);
  if (errorNameLength.type) return errorNameLength;

  const errorAmount = validateUserSchemas.validadeAmount(product.amount);
  if (errorAmount.type) return errorAmount;

  const errorAmountLength = validateUserSchemas.validateLengthAmount(product.amount);
  if (errorAmountLength.type) return errorAmountLength;

  const productCreate = await ProductModel.create(product);
  return { type: null, message: productCreate };
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