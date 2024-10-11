import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    name: string;

    @Column('numeric', { default: 0 })
    price: number;

    @Column('text', { nullable: true })
    description: string = ''; // Inicializada con un valor por defecto
}
