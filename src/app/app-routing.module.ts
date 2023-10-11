import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyPasswordComponent } from './verify-password/verify-password.component';
import { auth2Guard } from './auth2.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate:[authGuard] },
  { path: 'brands', component: BrandsComponent,canActivate:[authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent,canActivate:[authGuard] },
  { path: 'wishlist', component: WishlistComponent,canActivate:[authGuard] },
  { path: 'productdetails/:id', component: ProductdetailsComponent,canActivate:[authGuard] },
  { path: 'cart', component: CartComponent ,canActivate:[authGuard]},
  { path: 'categories', component: CategoriesComponent ,canActivate:[authGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'verify-code', component: VerifyPasswordComponent,canActivate:[auth2Guard]},
  { path: 'changePassword', component: ChangePasswordComponent,canActivate:[auth2Guard]},
  { path: 'checkout/:id', component: CheckoutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
