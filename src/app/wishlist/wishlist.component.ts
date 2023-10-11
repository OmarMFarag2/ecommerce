import { Component, OnInit } from '@angular/core';
import { CartService } from '../Cart.service';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private _ProductService: ProductService, private _CartService: CartService) { }
  ngOnInit(): void {
    this.getwishlist()
  }
  wishlist: any = [];
  isEmpty: boolean = false;
  getwishlist() {
    this._ProductService.getWishlist().subscribe({
      next: (res: any) => {
        this.wishlist = res.data;
        console.log(this.wishlist);
        if (this.wishlist.length > 0)
          this.isEmpty = false;
        else
          this.isEmpty = true
      }
    })
  }
  remove(id: string) {
    this._ProductService.RemoveWishlist(id).subscribe({
      complete: () => {
        this.getwishlist()
      }
    })
  }
  add(id: string) {
    this._CartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this.remove(id)
      }
    })
  }

}
