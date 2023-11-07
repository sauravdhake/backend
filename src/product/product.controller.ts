import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';

@Controller('/api/v1')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get('/products')
    getAllProducts(@Query() filterProductDto:FilterProductDto): Product[] {
        if(Object.keys(filterProductDto).length){
            return
        }
        return this.productService.getAllProducts();
    }

    @Get('/product/serial_no/:serial_no')
    getProductById(@Param('serial_no') id:string):Product{
        return this.productService.getProductById(id)
    }
    @Post('/product')
    createProduct(
        @Body() createTaskDto:CreateProductDto
    ):Product{
        return this.productService.createProduct(createTaskDto)
    }

    @Delete('/product/serial_no/:serial_no')
    deleteProduct(@Param('serial_no') id:string):void{
        return this.productService.deleteProduct(id)
    }

    @Patch('/product/serial_no/:serial_no')
    updateProduct(@Param('serial_no') id:string,
    @Body() updateProductDto:UpdateProductDto ):Product{
        return
    }

}
