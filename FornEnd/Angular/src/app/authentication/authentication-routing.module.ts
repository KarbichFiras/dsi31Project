import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SingnupComponent } from './singnup/singnup.component';

const routes: Routes = [
  
  { path : "login", component : LoginComponent},
  { path : 'signup', component: SingnupComponent },
  //{ path : '', component: AuthenticationComponent },
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
