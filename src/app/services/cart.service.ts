import { Injectable } from '@angular/core';
import {ICart, ICartItem} from "../models/cart";
import {BehaviorSubject} from "rxjs";
import {IProduct} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart !: ICart
  public cartItemList: ICartItem[] = []
  public productList = new BehaviorSubject<any>([]);

  public message:any;
  constructor() { }

  getProducts(){
    return this.productList.asObservable()
  }

  setProduct(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product:ICartItem){
    const index = this.cartItemList.findIndex(i=> i.product.id === product.product.id)
    if (index>=0){
     this.cartItemList[index].quantity += product.quantity;
      this.getTotalPrice();
    }else{
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }

  }
   getTotalPrice(): number {
    let grandTotal : number = 0;
     this.cartItemList.map(a=>{
       grandTotal += a.quantity * a.product.price;
     })
     return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if (product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }

  sendMessage(message:any){
    this.message = message;
  }

  getMessage(){
    return this.message;
  }
}
