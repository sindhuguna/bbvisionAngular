import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentmasteraddComponent } from './departmentmasteradd.component';

const routes: Routes = [{ path: "", component: DepartmentmasteraddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentmasteraddRoutingModule { }
