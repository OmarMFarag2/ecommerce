import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  constructor(private _AuthService: AuthService,private router:Router) {this.checkLogged() }
  sendData(data: FormGroup) {
    this._AuthService.login(data.value).subscribe({
      next: (res: any) => {
        console.log(res);
        if(res.message=="success")
        {
          localStorage.setItem('token',res.token)
          this._AuthService.decode();
          console.log(this._AuthService.user);
          this.router.navigate(['/home'])
        }
      }
    })
  }
  checkLogged(){
    if(localStorage.length>0)
    {
      this.router.navigate(['/home'])
    }
  }
}
