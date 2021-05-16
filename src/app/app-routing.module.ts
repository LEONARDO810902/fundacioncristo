import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [

   {
    path: '',
    loadChildren:() => import('./fundacion/fundacion.module').then(m => m.FundacionModule)
  },

  {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
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
