import { Component,Input } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input() product: Product = {} as Product
 @Input() category: Category = {} as Category
}
