import { IsNotEmpty } from "class-validator";

export class CreateOrderDto{
    @IsNotEmpty()
    serial_no:string;

    @IsNotEmpty()
    qty:Number;
    
}