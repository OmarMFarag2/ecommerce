import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject(null);
  decode() {
    let encode: string = JSON.stringify(localStorage.getItem("token"));
    let x: any = jwtDecode(encode);
    this.user.next(x);
  }

  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem("token") != null) {
      this.decode();
    }
  }
  register(data: FormGroup): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data)
  }
  login(data: FormGroup): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', data)
  }
  forgotPassword(data: FormGroup): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', data)
  }
  confirmCode(data: FormGroup): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', data)
  }
  resetPassword(data: FormGroup): Observable<any> {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', data)
  }
}
