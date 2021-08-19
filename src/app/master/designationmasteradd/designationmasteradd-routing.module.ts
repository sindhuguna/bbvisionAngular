import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationmasteraddComponent } from './designationmasteradd.component';

const routes: Routes = [{path:"", component: DesignationmasteraddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationmasteraddRoutingModule { }
