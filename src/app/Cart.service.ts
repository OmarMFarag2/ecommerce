import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient) { }
  token: any = {
    'token': localStorage.getItem('token')
  }

  addToCart(id: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart/`, { productId: id }, { headers: this.token })
  }
  removeFromCart(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { headers: this.token })
  }
  getCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart/`, { headers: this.token })
  }
  updateCart(c: number, id: string): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { count: c }, { headers: this.token })
  } 
  checkout(data: FormGroup, id: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{shippingAddress:data},{headers:this.token})
  }
  // clear(id:string){
  //   return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:c},{headers:this.token})

  // }
}
