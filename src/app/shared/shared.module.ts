import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule } from '@angular/router';
import { FundacionRoutingModule } from '../fundacion/fundacion-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FundacionRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
