import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FundacionRoutingModule } from '../fundacion/fundacion-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FundacionRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent

  ]
})
export class SharedModule { }
