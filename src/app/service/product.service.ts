import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.urlproducts;

  constructor(private http: HttpClient) { }


 
  getRestaurants(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`);
  }


}
