import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentmappingaddRoutingModule } from './departmentmappingadd-routing.module';
import { DepartmentmappingaddComponent } from './departmentmappingadd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [DepartmentmappingaddComponent],
  imports: [
    CommonModule,
    SharedModule,
    DepartmentmappingaddRoutingModule
  ]
})
export class DepartmentmappingaddModule { }
