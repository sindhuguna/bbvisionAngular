import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewmappingmasteraddComponent } from './interviewmappingmasteradd.component';

const routes: Routes = [{ path: '', component: InterviewmappingmasteraddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewmappingmasteraddRoutingModule { }
