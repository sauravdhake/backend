import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductModule,
            OrderModule,
            TypeOrmModule.forRoot({
              type:'postgres',
              host:'localhost',
              port:5432,
              username:'postgres',
              password:'8208431391',
              database:'backend',
              autoLoadEntities:true,
              synchronize:true
            })],
})
export class AppModule {}
