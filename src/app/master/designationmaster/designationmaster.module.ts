import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationmasterRoutingModule } from './designationmaster-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DesignationmasterComponent } from './designationmaster.component';


@NgModule({
  declarations: [DesignationmasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    DesignationmasterRoutingModule
  ]
})
export class DesignationmasterModule { }
