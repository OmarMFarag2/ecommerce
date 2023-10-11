import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string='https://ecommerce.routemisr.com/api/v1/'
  getAllCategories(){
    return this._HttpClient.get(`${this.baseUrl}categories`)
  }
  getSpecificCategory(id:string){
    return this._HttpClient.get(`${this.baseUrl}categories/${id}`)

  }
  getSpecificSubCategory(){
    return this._HttpClient.get(`${this.baseUrl}subcategories/`)
  }
  getSpecificCategory1(id:string){
    return this._HttpClient.get(`${this.baseUrl}categories/${id}/subcategories`)
  }
}
