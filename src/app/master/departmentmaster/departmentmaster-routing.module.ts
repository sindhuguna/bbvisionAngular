import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentmasterComponent } from './departmentmaster.component';
const routes: Routes = [
  {
    path: '',
    component: DepartmentmasterComponent
  }
];
@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentmasterRoutingModule { }
