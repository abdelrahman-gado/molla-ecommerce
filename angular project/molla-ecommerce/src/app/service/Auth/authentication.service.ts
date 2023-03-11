import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  register(name: string, email: string, password: string) {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    return this.http.post(`${environment.apiUrl}auth/register`, data);
  }

  categoryUpdate(data:any,id:number){
return this.http.post(`${environment.apiUrl}admin/categories/${id}?_method=PUT`,data)
  }

  productUpdate(data:any,id:number){
return this.http.post(`${environment.apiUrl}admin/products/${id}?_method=PUT`,data)
  }
}
