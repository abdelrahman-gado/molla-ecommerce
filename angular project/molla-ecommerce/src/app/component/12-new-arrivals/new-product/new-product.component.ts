import { Component,Input } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  @Input() product: Product = {} as Product

}
