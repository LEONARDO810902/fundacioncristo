import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SomosComponent } from './pages/somos/somos.component';
import { EsalComponent } from './pages/esal/esal.component';
import { FooterComponent } from '../shared/footer/footer.component';

const rutas: Routes = [
  {
    path: '',
      component: HomeComponent,
      children:[
      { path: 'somos', component: SomosComponent },
      { path: 'esal', component: EsalComponent },
      { path: 'footer', component: FooterComponent },


    ]
  },
  {
    path: '',
    redirectTo: 'HomeComponent',
    pathMatch: 'full'
  }
]

@NgModule({

  imports: [RouterModule.forChild(rutas)],

  exports: [
    RouterModule
  ]
})
export class FundacionRoutingModule { }
