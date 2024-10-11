import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Product } from '../entities/product.entity';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'myuser',
    password: process.env.DB_PASSWORD || 'mypassword',
    database: process.env.DB_NAME || 'mydatabase',
    entities: [Product],
    synchronize: true, 
});