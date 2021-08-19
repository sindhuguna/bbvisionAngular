import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantmasterRoutingModule } from './consultantmaster-routing.module';
import { ConsultantmasterComponent } from './consultantmaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    ConsultantmasterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConsultantmasterRoutingModule
  ]
})
export class ConsultantmasterModule { }
