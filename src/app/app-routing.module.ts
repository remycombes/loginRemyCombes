import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'creer',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
