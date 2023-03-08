import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/03-home/home.component';
import { ShopComponent } from './component/04-shop/shop.component';
import { AboutComponent } from './component/05-about/about.component';
import { FAQComponent } from './component/07-faq/faq.component';
import { ContactComponent } from './component/06-contact/contact.component';
import { CartComponent } from './component/08-cart/cart.component';
import { WishlistComponent } from './component/09-wishlist/wishlist.component';
import { ProductDetailComponent } from './component/10-product-detail/product-detail.component';
import { AdminCategoriesComponent } from './component/15-admin/admin-categories/admin-categories.component';
import { AdminProductsComponent } from './component/15-admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './component/15-admin/admin-users/admin-users.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'faq',component:FAQComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'detail',component:ProductDetailComponent},
  {path:"admin-categories",component:AdminCategoriesComponent},
  {path:"admin-products",component:AdminProductsComponent},
  {path:"admin-users",component:AdminUsersComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
