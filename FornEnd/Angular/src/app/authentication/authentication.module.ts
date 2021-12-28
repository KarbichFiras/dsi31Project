import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SingnupComponent } from './singnup/singnup.component';
import{ FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SingnupComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
