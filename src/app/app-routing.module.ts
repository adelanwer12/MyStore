import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import {CartComponent} from "./components/cart/cart.component";
import {ProductItemDetailComponent} from "./components/product-item-detail/product-item-detail.component";
import {ConfirmationComponent} from "./components/confirmation/confirmation.component";

const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  { path: 'products', component: ProductListComponent },
  { path: 'products/product/:id', component: ProductItemDetailComponent },
  {path:'cart', component:CartComponent},
  {path:'confirm', component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
