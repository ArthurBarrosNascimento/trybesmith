import express from 'express';

import * as ProductController from './controllers/products.controller';

const app = express();

app.use(express.json());
app.get('/products', ProductController.getAll);
app.post('/products', ProductController.createProduct);

export default app;
