import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[] = []


constructor(private productService:ProductService){}

ngOnInit(): void {
    this.productService.getProducts().subscribe((data:any)=>this.products = data)
  
  }

}
