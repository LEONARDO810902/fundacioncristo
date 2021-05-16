import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundacionRoutingModule } from './fundacion-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { SomosComponent } from './pages/somos/somos.component';
import { EsalComponent } from './pages/esal/esal.component';
import { AppModule } from '../app.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    SomosComponent,
    EsalComponent
  ],
  imports: [
    CommonModule,
    FundacionRoutingModule,
    MaterialModule,
    SharedModule


  ]
})
export class FundacionModule { }
