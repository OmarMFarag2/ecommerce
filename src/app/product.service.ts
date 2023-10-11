import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  token:any={
    "token":localStorage.getItem('token')
  }

  constructor(private _HttpClient:HttpClient) { }
  getProducts():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/products")
  }
  getProductsByID(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getWishlist():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/wishlist",{headers:this.token})
  }
  addWishlist(id:string):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId:id},{headers:this.token})
  }
  RemoveWishlist(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers:this.token})
  }
}
