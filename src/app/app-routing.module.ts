import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'fundacion',
    loadChildren:() => import('./fundacion/fundacion.module').then(m => m.FundacionModule)
  },

  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
  // component: ErrorPageComponent
  redirectTo: '404'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
