import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postData(userData : any): any {
    return this.http.post<any>('http://localhost:5147/api/auth', userData);
  }
}
