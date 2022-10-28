import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { LoginIndexComponent } from './container/login-index/login-index.component';
import { LoginRoutingModule } from './login-routing.module';
import { DataModule } from '../data/data.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginIndexComponent,
    UserFormComponent,
    UserDetailsComponent
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
