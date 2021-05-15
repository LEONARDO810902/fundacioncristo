import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './fundacion/pages/home/home.component';

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
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
  // component: ErrorPageComponent
  redirectTo: 'home'
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
