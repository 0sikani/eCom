import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetailComponent } from './product-detail/product-detail';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];
