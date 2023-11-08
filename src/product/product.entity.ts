import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class productEntity{
    @Column()
    serial_no:string;

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    product_name:string;

    @Column()
    description:string;

    @Column()
    product_id:string;

    @Column()
    price:string;

    @Column()
    qty:Number;

    @Column()
    isactive:boolean

}