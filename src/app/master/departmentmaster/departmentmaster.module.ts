import { NgModule } from '@angular/core';
import { DepartmentmasterRoutingModule } from './departmentmaster-routing.module';
import { DepartmentmasterComponent } from './departmentmaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CommonModule } from '@angular/common';
import { DepartmentmasterService } from '../service/departmentmaster.service';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    DepartmentmasterRoutingModule
  ],
  declarations: [DepartmentmasterComponent],
  providers: [DepartmentmasterService]
})
export class DepartmentmasterModule { }
