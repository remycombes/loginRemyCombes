import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { LoginIndexComponent } from './container/login-index/login-index.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginFormComponent,
    LoginIndexComponent
  ],
  imports: [
    LoginRoutingModule, 
    CommonModule
  ]
})
export class LoginModule { }
