import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryadvanceComponent } from './salaryadvance.component';

const routes: Routes = [{path:"",component: SalaryadvanceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryadvanceRoutingModule { }
