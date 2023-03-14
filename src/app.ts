import express from 'express';

import * as ProductController from './controllers/products.controller';
import * as UserController from './controllers/user.controller';
import getAllOrders from './controllers/orders.controller';

const app = express();

app.use(express.json());
app.get('/products', ProductController.getAll);
app.post('/products', ProductController.createProduct);

app.post('/users', UserController.createUser);

app.get('/orders', getAllOrders);

export default app;
