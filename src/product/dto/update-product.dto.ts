import { IsOptional } from "class-validator";

export class UpdateProductDto{
    @IsOptional()
    product_name:string;

    @IsOptional()
    description:string;

    @IsOptional()
    price:string;

    @IsOptional()
    qty:Number;

    @IsOptional()
    isactive:boolean
}