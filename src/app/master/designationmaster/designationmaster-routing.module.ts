import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationmasterComponent } from './designationmaster.component';

const routes: Routes = [{ path: "", component: DesignationmasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationmasterRoutingModule { }
