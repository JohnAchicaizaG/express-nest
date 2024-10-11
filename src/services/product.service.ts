import { AppDataSource } from '../config/ormconfig';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dtos/create-product.dto';
import { validateOrReject } from 'class-validator';

export class ProductService {

    private productRepository = AppDataSource.getRepository(Product);

    async createProduct(createProductDto: CreateProductDto) {
        await validateOrReject(createProductDto);

        const product = this.productRepository.create(createProductDto);
        return await this.productRepository.save(product);
    }

    async findAll() {
        return await this.productRepository.find();
    }

    async findOne(id: string) {
        return await this.productRepository.findOneBy({ id });
    }

    async updateProduct(id: string, updateData: Partial<CreateProductDto>) {
        await this.productRepository.update(id, updateData);
        return this.findOne(id);
    }

    async deleteProduct(id: string) {
        await this.productRepository.delete(id);
    }
}
