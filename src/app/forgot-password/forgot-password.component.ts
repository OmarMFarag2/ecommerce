import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  error: boolean = false
  reset = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })
  constructor(private _AuthService: AuthService, private router: Router) {  }
  sendData(data: FormGroup) {
    this._AuthService.forgotPassword(data.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('email',JSON.stringify(this.reset.get('email')!.value))
        this.router.navigate(['/verify-code'])
      },
      error: (res: any) => {
        console.log(res.error);
        this.error = true;
      }
    })
  }
}
