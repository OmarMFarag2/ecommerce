import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  islogged: boolean = false;
  signout(){
    localStorage.clear()
    this.islogged=false;
  }
  constructor(private _AuthService: AuthService) {
    this._AuthService.user.subscribe({
      next: (res: any) => {
        if (this._AuthService.user.getValue() == null) {
          this.islogged = false;
          console.log(this.islogged);
        }

        else {
          this.islogged = true;
          console.log(this.islogged);
        }
      },
      error: (res: any) => {
        console.log('error');
      }
    })
  }
}
