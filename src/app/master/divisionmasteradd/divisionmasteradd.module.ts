import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionmasteraddRoutingModule } from './divisionmasteradd-routing.module';
import { DivisionmasteraddComponent } from './divisionmasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [DivisionmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    DivisionmasteraddRoutingModule
  ]
})
export class DivisionmasteraddModule { }
