import {IProduct} from "./product";

export interface ICart{
  items: ICartItem[]
  grandTotal: number
}

export interface ICartItem{
  product: IProduct
  quantity: number;
}
