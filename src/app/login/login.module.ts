import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { LoginIndexComponent } from './container/login-index/login-index.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    LoginIndexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
