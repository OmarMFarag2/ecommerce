import { inject } from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';


export const auth2Guard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('email') != null)
    return true;
  else {
    router.navigate(['/login'])
    return false
  }
};
