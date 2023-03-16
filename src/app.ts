import express from 'express';

import * as ProductController from './controllers/products.controller';
import * as UserController from './controllers/user.controller';
import getAllOrders from './controllers/orders.controller';
import verifyLoginUser from './controllers/login.controller';

import verifyFields from './middleware/verifyFieldsLogin';

const app = express();

app.use(express.json());
app.get('/products', ProductController.getAll);
app.post('/products', ProductController.createProduct);

app.post('/users', UserController.createUser);

app.get('/orders', getAllOrders);

app.post('/login', verifyFields, verifyLoginUser);

export default app;
