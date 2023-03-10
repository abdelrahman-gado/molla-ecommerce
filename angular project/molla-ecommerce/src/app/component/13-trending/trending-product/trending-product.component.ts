import { Component,Input } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-trending-product',
  templateUrl: './trending-product.component.html',
  styleUrls: ['./trending-product.component.css']
})
export class TrendingProductComponent {
  @Input() product: Product = {} as Product

}
