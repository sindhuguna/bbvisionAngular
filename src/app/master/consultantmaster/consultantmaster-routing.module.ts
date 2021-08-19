import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantmasterComponent } from './consultantmaster.component';

const routes: Routes = [{ path: '', component: ConsultantmasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantmasterRoutingModule { }
