import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { Product } from 'src/app/interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
// add to cart 
cartProducts: Product[] = [];

constructor(private httpClient:HttpClient) { }

getProducts(){
  return this.httpClient.get(`${environment.apiUrl}products`)
}

getNewArrivals(){
  return this.httpClient.get(`${environment.apiUrl}products/new-arrivals`)
}

getRecommended(){
  return this.httpClient.get(`${environment.apiUrl}products/recommended`)
}

getTrending(){
  return this.httpClient.get(`${environment.apiUrl}products/trending`)
}

addProduct(product:Product) :void {
  this.cartProducts.push(product);
}

getProductById(id:number){
 return this.httpClient.get(`${environment.apiUrl}products/${id}`)
}

getProductByCategoryId(category_id:number){
  return this.httpClient.get(`${environment.apiUrl}categories/${category_id}/products`)
}

}
