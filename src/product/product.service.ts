import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import {v4 as uuid} from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
    private products:Product[] = [];

    getAllProducts():Product[]{
        return this.products;
    }

    getProductById(product_id:string):Product{

    }
    createProduct(createTaskDto:CreateProductDto):Product{
            const {product_name,
                description,
                serial_no,
                price,
                qty,
                isactive} = createTaskDto
            const product: Product ={
                product_id:uuid(),
                product_name,
                description,
                serial_no,
                price,
                qty,
                isactive
            }

            this.products.push(product);
            return product;
        }

    
}
