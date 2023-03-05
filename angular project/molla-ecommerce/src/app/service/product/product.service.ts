import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
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

}
