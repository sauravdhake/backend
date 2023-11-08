import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import {productEntity} from './product.entity'

import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import {v4 as uuid} from 'uuid';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProductDto } from './dto/update-product.dto';
@Injectable()
export class ProductService {
    constructor(@InjectRepository(productEntity) private repo: Repository<productEntity>) {
    
    }
    // private products:Product[] = [];

    async getAllProducts(){
        return this.repo.find();
    }

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
          const products= await this.getAllProducts()
          products.map((item)=>{
            if(item.serial_no === serial_no){
                throw new NotFoundException(`serial_no  ${serial_no} already exist`)
            }
          });
        
        const product = this.repo.create({
            product_id: uuid(),
            product_name,
            description,
            serial_no,
            price,
            qty,
            isactive:true
        });
    
        await this.repo.save(product)
        return product;
      }

       async deleteProduct(serial_no:string){
            const Product =await this.repo.findOneBy({serial_no: serial_no})
            if(!Product){ 
                throw new NotFoundException('product not found')
            }
            Product.isactive = false
            return {message:"product deleted successfully"}
            //return this.repo.save(Product)
        }

        async updateProduct(serial_no:string, attr: Partial<productEntity>){
            const Product =await this.repo.findOneBy({serial_no: serial_no})

            if(!Product){ 
                throw new NotFoundException('product not found')
            }

            Object.assign(Product, attr)
            return this.repo.save(Product)
        }

    
}




