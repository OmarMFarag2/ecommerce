import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../Cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  register = new FormGroup({
    details: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    phone: new FormControl(null, [Validators.pattern("01[0125][0-9]{8}")]),
    city: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  })
  constructor(private _CartService: CartService,private router:Router,private _ActivatedRoute:ActivatedRoute) { }
  sendData(data: FormGroup) {   
    this._CartService.checkout(data.value,this._ActivatedRoute.snapshot.params['id']).subscribe({
      next: (res: any) => {
        window.location.href=res.session.url;
        console.log(res.session.url);  
      },
      error:(res: any) => {
        console.log(res);
      }
    })
  }
}
