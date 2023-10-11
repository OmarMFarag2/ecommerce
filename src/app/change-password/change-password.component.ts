import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  valid: boolean = true;
  body :any= { email: '',newPassword: '' }

  reset = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.pattern("[A-Za-z1-9]{7,15}")]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern("[A-Za-z1-9]{7,15}")]),
  })
  constructor(private _AuthService: AuthService, private router: Router) { }
  sendData(data: FormGroup) {
    this.body.email =JSON.parse(localStorage.getItem('email')!)
    this.body.newPassword = data.get('password')?.value
    this._AuthService.resetPassword(this.body).subscribe({
      next: (res: any) => {
        localStorage.clear()
        this.router.navigate(['/login'])
      }
    })
  }
  checkPassword() {
    if (this.reset.get('password')?.value == this.reset.get('rePassword')?.value) {
      this.valid = true;
    }
    else
      this.valid = false;
  }
}
