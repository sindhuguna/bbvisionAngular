import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantmasteraddComponent } from './consultantmasteradd.component';

const routes: Routes = [{ path: '', component: ConsultantmasteraddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantmasteraddRoutingModule { }
