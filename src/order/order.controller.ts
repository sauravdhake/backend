import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderEntity } from './order.entity';

@Controller('/api/v1')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Post('/order')
    createProduct(
        @Body() createOrderDto:CreateOrderDto):Promise<OrderEntity>{
        return this.orderService.createOrder(createOrderDto)
    }   
    
}
