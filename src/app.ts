import express from 'express';
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from './controllers/product.controller';
import 'reflect-metadata';
import { AppDataSource } from './config/ormconfig';

const app = express();
app.use(express.json());

app.post('/products', createProduct);
app.get('/products', getProducts);
app.get('/products/:id', getProduct);
app.put('/products/:id', updateProduct);
app.delete('/products/:id', deleteProduct);

AppDataSource.initialize().then(() => {
    console.log('Database connected');
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
}).catch((error) => {
    console.error('Error during Data Source initialization', error);
});
