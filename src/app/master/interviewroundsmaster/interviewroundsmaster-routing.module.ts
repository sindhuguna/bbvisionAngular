import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewroundsmasterComponent } from './interviewroundsmaster.component';

const routes: Routes = [{
  path: '',
  component: InterviewroundsmasterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewroundsmasterRoutingModule { }
