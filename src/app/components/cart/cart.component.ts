import {Component, OnInit, ViewChild} from '@angular/core';
import {CartService} from "../../services/cart.service";
import { ICartItem} from "../../models/cart";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: ICartItem[] = [];
  grandTotal!: number;

  @ViewChild('cart') from: NgForm | undefined
  constructor(private cartServices: CartService, private router:Router) { }

  ngOnInit(): void {
    this.cartServices.getProducts().subscribe(res=> {
      this.grandTotal = this.cartServices.getTotalPrice();
    } )
    this.products = this.cartServices.cartItemList
  }

  finish()
  {
    this.router.navigate(["/confirm"]);
    let all = this.from?.value
    all.grandTotal = this.grandTotal
    this.cartServices.sendMessage(all)
    console.log(all)
  }


}
