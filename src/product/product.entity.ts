import { OrderEntity } from "src/order/order.entity";
import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne} from "typeorm";

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
    price:string;

    @Column()
    qty:Number;

    @Column()
    isactive:boolean

    @ManyToOne(() => OrderEntity, (order) => order.products)
    order:OrderEntity;

}