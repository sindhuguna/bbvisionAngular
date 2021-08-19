import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentmappingComponent } from './departmentmapping.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentmappingComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentmappingRoutingModule { }
