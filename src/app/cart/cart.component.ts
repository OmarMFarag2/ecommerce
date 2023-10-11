import { Component, OnInit } from '@angular/core';
import { CartService } from '../Cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) { }
  ngOnInit(): void {
    this.getCarts()
  }
  isEmpty: boolean = false;
  cartdata: any = []
  count: any = {
    'count': 0
  }
  getCarts() {
    this._CartService.getCart().subscribe({
      next: (res:any) => {
        this.cartdata = res;
        console.log(this.cartdata);
        
        if (res.numOfCartItems > 0)
          this.isEmpty = false;
        else
          this.isEmpty = true
        console.log(this.cartdata.numOfCartItems);
      },
      error:(res:any) => {
        this.isEmpty=true
      },
    })
  }
  clearCart(id:string){

  }
  removeItem(id: string) {
    this._CartService.removeFromCart(id).subscribe({
      next: (res) => {
        this.getCarts();
      }
    })
  }
  update(c: number, id: string) {
    if (c <= 0) {
      this.removeItem(id)
      return
    }
    this._CartService.updateCart(c, id).subscribe({
      next: (res) => {
        this.getCarts();
      }
    })
  }
}
