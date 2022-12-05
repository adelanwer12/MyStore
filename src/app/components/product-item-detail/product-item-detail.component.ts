import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../models/product";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  productId: any;
  product: any ;

  count: number =1 ;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private cartService:CartService) { }

  ngOnInit(): void {
    this.productId =  this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(res=>{
      this.product = res.find(x=>x.id == this.productId)
    })
  }

  addToCart(product: any):void {
    if (this.count>=1){
      for (let i = 0; i < this.count; i++ ){
        this.cartService.addToCart(product);
      }
    }
    alert('product added to cart')
  }

}
