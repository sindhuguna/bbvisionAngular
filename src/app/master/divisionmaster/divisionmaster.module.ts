import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionmasterRoutingModule } from './divisionmaster-routing.module';
import { DivisionmasterComponent } from './divisionmaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [DivisionmasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    DivisionmasterRoutingModule
  ]
})
export class DivisionmasterModule { }
