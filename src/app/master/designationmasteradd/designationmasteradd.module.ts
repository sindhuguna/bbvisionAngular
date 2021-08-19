import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationmasteraddRoutingModule } from './designationmasteradd-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DesignationmasteraddComponent } from './designationmasteradd.component';


@NgModule({
  declarations: [DesignationmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    DesignationmasteraddRoutingModule
  ]
})
export class DesignationmasteraddModule { }
