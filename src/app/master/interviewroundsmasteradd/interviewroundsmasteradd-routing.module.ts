import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewroundsmasteraddComponent } from './interviewroundsmasteradd.component';

const routes: Routes = [{
  path: '',
  component: InterviewroundsmasteraddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewroundsmasteraddRoutingModule { }
