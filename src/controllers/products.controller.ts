import { Request, Response } from 'express';

import ProductService from '../services/products.service';

export const getAll = async (_req: Request, res: Response) => {
  const allProducts = await ProductService.getAllPorducts();
  return res.status(200).json(allProducts);
};

export const createProduct = async (req:Request, res: Response) => {
  const { name, amount } = req.body;
  const { type, message } = await ProductService.createProduct({ name, amount });
  if (type) return res.status(type).json(message);
  const porductById = await ProductService.getProductById(message);
  return res.status(201).json(porductById);
};
