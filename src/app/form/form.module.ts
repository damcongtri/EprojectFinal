import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
