import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css'],
})
export class ProductShopComponent {
  @Input() product: Product = {} as Product;
}
