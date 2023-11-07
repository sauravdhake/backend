import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    getAllProducts(): Product[] {
        return this.productService.getAllProducts();
    }

    @Get('/:id')
    getProductById()
    @Post()
    createProduct(
        @Body() createTaskDto:CreateProductDto
    ):Product{
        return this.productService.createProduct(createTaskDto)
    }
}
