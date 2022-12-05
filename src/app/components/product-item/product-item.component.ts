import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ICart, ICartItem} from "../../models/cart";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  cart:ICart[] =[];
  quantity:number=1;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: IProduct, quantity:number):void {
    const productToAdd: ICartItem = {
      product : product,
      quantity : quantity,
    }
    this.cartService.addToCart(productToAdd);
    alert('product added to cart')
  }
}
