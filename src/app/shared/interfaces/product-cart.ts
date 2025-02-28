import { productInterface } from "./product";

export interface cartProductInterface
{
    count : number ,
    _id : string ,
    product : productInterface ,
    price : number ,
}