import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { LoginIndexComponent } from './container/login-index/login-index.component';
import { LoginRoutingModule } from './login-routing.module';
import { DataModule } from '../data/data.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginFormComponent,
    LoginIndexComponent
  ],
  imports: [
    LoginRoutingModule,
    DataModule,  
    ReactiveFormsModule, 
    SharedModule, 
    CommonModule
  ]
})
export class LoginModule { }
