import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const allOrders = await OrderService.getAll();
  return res.status(200).json(allOrders);
};

export default getAllOrders;