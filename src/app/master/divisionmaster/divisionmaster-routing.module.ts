import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionmasterComponent } from './divisionmaster.component';

const routes: Routes = [{ path: '', component: DivisionmasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionmasterRoutingModule { }
