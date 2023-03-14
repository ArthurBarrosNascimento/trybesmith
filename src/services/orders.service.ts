import OrderModel from '../models/orders.model';

const getAll = async () => {
  const orders = await OrderModel.getAll();
  return orders;
};

const OrderService = {
  getAll,
};

export default OrderService;