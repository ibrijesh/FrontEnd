import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getData() {
    return this.http.get('http://localhost:5147/api/productcategory');  // The request will pass through the interceptor
  }
}
