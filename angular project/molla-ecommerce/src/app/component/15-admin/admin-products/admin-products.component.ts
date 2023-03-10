import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit{
products: Product[] = []
current_page: number = 0
last_page: number = 1

constructor(private productService:ProductService){}

ngOnInit(): void {
    this.productService.getProducts().subscribe((data:any)=>this.products = data.data)
    this.productService.getProducts().subscribe((data:any)=>this.current_page=data.current_page)
    this.productService.getProducts().subscribe((data:any)=>this.last_page=data.last_page)
}

}
