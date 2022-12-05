import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  message:any
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.message = this.cartService.getMessage();
  }

}
