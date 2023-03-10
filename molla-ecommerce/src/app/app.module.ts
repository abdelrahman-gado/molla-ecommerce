import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/01-header/header.component';
import { FooterComponent } from './component/02-footer/footer.component';
import { HomeComponent } from './component/03-home/home.component';
import { ShopComponent } from './component/04-shop/shop.component';
import { AboutComponent } from './component/05-about/about.component';
import { FAQComponent } from './component/07-faq/faq.component';
import { ContactComponent } from './component/06-contact/contact.component';
import { CartComponent } from './component/08-cart/cart.component';
import { WishlistComponent } from './component/09-wishlist/wishlist.component';
import { ProductDetailComponent } from './component/10-product-detail/product-detail.component';
import { CategoriesComponent } from './component/11-categories/categories.component';
import { CategoryComponent } from './component/11-categories/category/category.component';
import { NewArrivalsComponent } from './component/12-new-arrivals/new-arrivals.component';
import { NewProductComponent } from './component/12-new-arrivals/new-product/new-product.component';
import { RecommendedProductsComponent } from './component/14-recommended-products/recommended-products.component';
import { ProductComponent } from './component/14-recommended-products/product/product.component';
import { TrendingComponent } from './component/13-trending/trending.component';
import { TrendingProductComponent } from './component/13-trending/trending-product/trending-product.component';
import { CartTableComponent } from './component/08-cart/cart-table/cart-table.component';
import { CartTotalComponent } from './component/08-cart/cart-total/cart-total.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    FAQComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    WishlistComponent,
    ProductDetailComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductComponent,
    NewArrivalsComponent,
    NewProductComponent,
    RecommendedProductsComponent,
    ProductComponent,
    TrendingComponent,
    TrendingProductComponent,
    CartTableComponent,
    CartTotalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
