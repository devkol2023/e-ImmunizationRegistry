import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    SharedModule
]
})
export class AuthModule { }
