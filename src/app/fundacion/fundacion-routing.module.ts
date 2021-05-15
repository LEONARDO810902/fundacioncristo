import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SomosComponent } from './pages/somos/somos.component';
import { EsalComponent } from './pages/esal/esal.component';

const rutas: Routes = [
  {
    path: '',
      children:[
      { path: 'home', component: HomeComponent },
      { path: 'somos', component: SomosComponent },
      { path: 'esal', component: EsalComponent }

    ]
  }
]

@NgModule({

  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class FundacionRoutingModule { }
