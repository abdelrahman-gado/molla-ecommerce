import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
links: any = ''
id: number = 0 


constructor(private productService:ProductService, private route:ActivatedRoute){}

ngOnInit(): void {
    this.productService.getProducts().subscribe((data:any)=>this.products = data.data)
    this.productService.getProducts().subscribe((data:any)=>this.current_page=data.current_page)
    this.productService.getProducts().subscribe((data:any)=>this.links=data.links)

    this.route.params.subscribe(params=>this.id = params['id'])

    
}

}
