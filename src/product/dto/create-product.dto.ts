import { IsNotEmpty, Validate } from "class-validator";

export class CreateProductDto{
    @IsNotEmpty()
    product_name:string;

    @IsNotEmpty()
    description:string;
    @IsNotEmpty()
    serial_no:string;
    @IsNotEmpty()
    price:string;
    @IsNotEmpty()
    qty:Number;
    @IsNotEmpty()
    isactive:boolean
}



