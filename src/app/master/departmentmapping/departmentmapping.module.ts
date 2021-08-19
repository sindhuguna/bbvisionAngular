import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentmappingRoutingModule } from './departmentmapping-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DepartmentmappingComponent } from './departmentmapping.component';


@NgModule({
  declarations: [DepartmentmappingComponent],
  imports: [
    SharedModule,
    CommonModule,
    DepartmentmappingRoutingModule
  ]
})
export class DepartmentmappingModule { }
