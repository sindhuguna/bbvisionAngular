import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared/shared.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
