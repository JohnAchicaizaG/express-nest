import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';
import { CreateProductDto } from '../dtos/create-product.dto';

const productService = new ProductService();

export const createProduct = async (req: Request, res: Response) => {
    try {
        const productDto = new CreateProductDto();
        Object.assign(productDto, req.body);
        const product = await productService.createProduct(productDto);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

export const getProducts = async (_req: Request, res: Response) => {
    const products = await productService.findAll();
    res.json(products);
};

export const getProduct = async (req: Request, res: Response) => {
    const product = await productService.findOne(req.params.id);
    if (!product) {
        res.status(404).json({ message: 'Product not found' });
    } else {
        res.json(product);
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    res.json(updatedProduct);
};

export const deleteProduct = async (req: Request, res: Response) => {
    await productService.deleteProduct(req.params.id);
    res.status(204).send();
};
