import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../Cart.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {
  list: any = {}
constructor(private _CartService:CartService,private _ProductService: ProductService, private _ActivatedRoute: ActivatedRoute) { 
    this.getProductByid(_ActivatedRoute.snapshot.params['id']);
  }
  getProductByid(id: string) {
    this._ProductService.getProductsByID(id).subscribe({
      next: (res: any) => {
        this.list = res.data;
        console.log(this.list);
        
      }
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  add(id: string) {
    this._CartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
}
