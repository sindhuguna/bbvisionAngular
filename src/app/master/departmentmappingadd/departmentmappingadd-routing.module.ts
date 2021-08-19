import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentmappingaddComponent } from './departmentmappingadd.component';

const routes: Routes = [{ path: "", component: DepartmentmappingaddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentmappingaddRoutingModule { }
