import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    product_name:string;

    @Column()
    description:string;

    @Column()
    serial_no:string;

    @Column()
    price:string;

    @Column()
    qty:Number;

    @Column()
    isactive:boolean

}