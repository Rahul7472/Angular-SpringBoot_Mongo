import { Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { RoleComponent } from './Components/role/role.component';

export const routes: Routes = [
    {path : "users" , component : UserComponent},
    {path : "roles" , component : RoleComponent},
    { path: '',   redirectTo: '/users', pathMatch: 'full' }, // redirect to `users-component` if the path is empty
  ];