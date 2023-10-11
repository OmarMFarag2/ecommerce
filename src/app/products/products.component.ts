import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../Cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
  export class ProductsComponent implements OnInit {
    productList: Product[] = [];
    wishlist: Product[] = [];
    categoryList: any[] = [];
    key: string = '';
    flag: boolean = false;
    constructor(private _ProductService: ProductService, private _CartService: CartService) { }
    ngOnInit(): void {
      this.getAllProducts();
      this.getwishlist()
    }
    getwishlist() {
      this._ProductService.getWishlist().subscribe({
        next: (res: any) => {
          this.wishlist = res.data;
          console.log(res.data);
        }
      })
    }
    getAllProducts() {
      this._ProductService.getProducts().subscribe({
        next: (res: any) => {
          this.productList = res.data;
          console.log(res);
  
        }
      })
    }
    searchProduct(): Product[] {
      this.key = this.key.toLowerCase();
      return this.productList.filter((i) => i.title.toLowerCase().includes(this.key))
      // return this.productList.includes(asasasas)
  
    }
    addRemoveWishlist(id: string) {
      if (this.searchWishlist(id)) {
        this._ProductService.RemoveWishlist(id).subscribe({
          complete: () => {
            this.getwishlist()
          }
        })
      }
      else
        this._ProductService.addWishlist(id).subscribe({
          complete: () => {
            this.getwishlist()
          }
        })
    }
    searchWishlist(id: string) {
      console.log(1);
      
      if (this.wishlist.filter((i) => i._id.includes(id)).length > 0)
        return true
      return false
    }
    add(id: string) {
      this._CartService.addToCart(id).subscribe({
        next: (res) => {
          console.log(res);
        }
      })
    }
  }

