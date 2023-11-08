import { productEntity } from "src/product/product.entity";
import { Column, Entity, PrimaryGeneratedColumn ,OneToMany} from "typeorm";

@Entity()
export class OrderEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    serial_no:string;

    @Column()
    user_id:string;

    @OneToMany(() => productEntity, (products) => products.order)
    products:productEntity[];//_id of product table

    @Column()
    qty:Number;
}