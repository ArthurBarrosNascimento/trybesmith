import express from 'express';

import * as ProductController from './controllers/products.controller';
import * as UserController from './controllers/user.controller';

const app = express();

app.use(express.json());
app.get('/products', ProductController.getAll);
app.post('/products', ProductController.createProduct);

app.post('/users', UserController.createUser);

export default app;
