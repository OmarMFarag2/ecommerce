import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  constructor(private _HttpClient: HttpClient) { }
  ngOnInit(): void {
    this.getBrands()
  }
  brandsList: any[] = []
  index:number=0
  test(i:number){
    this.index=i
  }
  baseUrl:string='https://ecommerce.routemisr.com/api/v1/'
  getBrandsReq(){
    return this._HttpClient.get(`${this.baseUrl}brands`)
  }
  getBrands(){
    this.getBrandsReq().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.brandsList=res.data
      }
    })
  }
}
