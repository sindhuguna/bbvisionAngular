import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantmasteraddRoutingModule } from './consultantmasteradd-routing.module';
import { ConsultantmasteraddComponent } from './consultantmasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    ConsultantmasteraddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ConsultantmasteraddRoutingModule
  ]
})
export class ConsultantmasteraddModule { }
