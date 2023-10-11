import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  register = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern("[A-Za-z1-9]{7,15}")]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern("[A-Za-z1-9]{7,15}")]),
    phone: new FormControl(null, [Validators.pattern("01[0125][0-9]{8}")])
  })
  constructor(private _AuthService: AuthService,private router:Router) { }
  sendData(data: FormGroup) {    
    this._AuthService.register(data.value).subscribe({
      next: (res: any) => {
        this.router.navigate(['/login'])
      }
    })
  }
}
