import { Request, Response } from 'express';

import ProductService from '../services/products.service';

export const getAll = async (_req: Request, res: Response) => {
  const allProducts = await ProductService.getAllPorducts();
  return res.status(200).json(allProducts);
};

export const createProduct = async (req:Request, res: Response) => {
  const { name, amount } = req.body;
  const productIdCreated = await ProductService.createProduct({ name, amount });
  const porductById = await ProductService.getProductById(productIdCreated);
  return res.status(201).json(porductById);
};
