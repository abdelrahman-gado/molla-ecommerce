import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { ComingsoonComponent } from './components/pages/comingsoon/comingsoon.component';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DetailComponent } from './components/pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShopComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    FaqComponent,
    NotfoundComponent,
    ComingsoonComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    DashboardComponent,
    DetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
