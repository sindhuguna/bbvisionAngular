import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewmappingmasterComponent } from './interviewmappingmaster.component';

const routes: Routes = [{ path: '', component: InterviewmappingmasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewmappingmasterRoutingModule { }
