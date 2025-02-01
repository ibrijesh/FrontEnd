import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private url = "http://localhost:5147/api/productcategory";

  constructor(private http: HttpClient) { }

  GetProductCategory() : Observable<any> {
    return this.http.get<any>(this.url);
  }

}
