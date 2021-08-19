import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadaddComponent } from './leadadd.component';

const routes: Routes = [{ path: '', component: LeadaddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadaddRoutingModule { }
