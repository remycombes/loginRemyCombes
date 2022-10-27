import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginIndexComponent } from './container/login-index/login-index.component';

const routes: Routes = [{ path: '', component: LoginIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
