import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import { productEntity } from './product.entity';

@Controller('/api/v1')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get('/products')
    async getAllProducts() {
        //@Query() filterProductDto:FilterProductDto
        // if(Object.keys(filterProductDto).length){
            
        // }
        return this.productService.getAllProducts();
    }

    @Get('/product/serial_no/:serial_no')
    async getProductById(@Param('serial_no') serial_no:string): Promise<productEntity>{
        return this.productService.getProductById(serial_no)
    }
    @Post('/product')
    createProduct(
        @Body() createProductDto:CreateProductDto):Promise<productEntity>{
        return this.productService.createProduct(createProductDto)
    }

    @Delete('/product/serial_no/:serial_no')
    async deleteProduct(@Param('serial_no') serial_no:string){
        return this.productService.deleteProduct(serial_no)
    }

    @Patch('/product/serial_no/:serial_no')
    updateProduct(@Param('serial_no') serial_no:string,
    @Body() updateProductDto:UpdateProductDto ):Promise<productEntity>{
        return this.productService.updateProduct(serial_no,updateProductDto)
    }

}
