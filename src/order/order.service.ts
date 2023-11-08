import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import {v4 as uuid} from 'uuid';
@Injectable()
export class OrderService {
    constructor(@InjectRepository(OrderEntity) private repo: Repository<OrderEntity>) {
    }

    async getAllOrders(){
        return this.repo.find();
    }


    async createOrder(createOrderDto:CreateOrderDto){
        const {
            serial_no,
            qty
            } = createOrderDto
          const orders= await this.getAllOrders()
          orders.map((item)=>{
            if(item.serial_no === serial_no){
                throw new NotFoundException(`serial_no  ${serial_no} already exist`)
            }
          });
        
        const order = this.repo.create({           
            serial_no,
            user_id: uuid(),
            qty
        });
    
        await this.repo.save(order)
        return order;
      }
}
