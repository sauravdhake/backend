import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import {productEntity} from './product.entity'

import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import {v4 as uuid} from 'uuid';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class ProductService {
    constructor(@InjectRepository(productEntity) private repo: Repository<productEntity>) {
    
    }
    // private products:Product[] = [];

    // getAllProducts():Product[]{
    //     return this.products;
    // }

    // getProductsWithFilters(filterProductDto:FilterProductDto):Product{
    //     return
    // }

    async getProductById(serial_no:string){
        const found = await this.repo.findOneBy({serial_no: serial_no})
        if(!found){
            throw new NotFoundException(`product with ${serial_no} not found`)
        }
        return found
    }
    
    async createProduct(createProductDto: CreateProductDto){
        const {product_name,
            description,
            serial_no,
            price,
            qty,
            isactive} = createProductDto
        
        const product = this.repo.create({
            product_id: uuid(),
            product_name,
            description,
            serial_no,
            price,
            qty,
            isactive
        });
    
        await this.repo.save(product)
        return product;
      }
    //     deleteProduct(product_id:string):void{

    //     }

    //     updateProduct(){
    //         return
    //     }

    
}




