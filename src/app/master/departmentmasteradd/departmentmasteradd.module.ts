import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentmasteraddRoutingModule } from './departmentmasteradd-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DepartmentmasteraddComponent } from './departmentmasteradd.component';


@NgModule({
  declarations: [DepartmentmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    DepartmentmasteraddRoutingModule
  ]
})
export class DepartmentmasteraddModule { }
