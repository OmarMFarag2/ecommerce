import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:any;
  decode() {
    let encode: string = JSON.stringify(localStorage.getItem("token"));
    let x = jwtDecode('encode');
    this.user=x;
  }
  constructor(private _HttpClient:HttpClient) {  }
    login(data:FormGroup): Observable<any> {
      return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',data)
    }
}
