import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrls: ['./verify-password.component.scss']
})
export class VerifyPasswordComponent {
  error: boolean = false
  reset = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{6}')])
  })
  constructor(private _AuthService: AuthService, private router: Router) {  }
  sendData(data: FormGroup) {
    this._AuthService.confirmCode(data.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('code',JSON.stringify(data.get('resetCode')?.value))
        this.router.navigate(['/changePassword'])
      },
      error: (res: any) => {
        this.error = true;
      }
    })
  }
}
