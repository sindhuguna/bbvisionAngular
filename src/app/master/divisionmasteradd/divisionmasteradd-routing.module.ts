import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionmasteraddComponent } from './divisionmasteradd.component';

const routes: Routes = [{ path: '', component: DivisionmasteraddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionmasteraddRoutingModule { }
