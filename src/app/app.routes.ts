import { ProductsListComponent } from './products/products-list.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth.guard';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddOrEditProductComponent } from './products/add-or-edit-product/add-or-edit-product.component';

export const routes: Routes = [
  { path: '',component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsListComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: AddOrEditProductComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];
