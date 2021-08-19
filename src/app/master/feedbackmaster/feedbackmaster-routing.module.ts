import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackmasterComponent } from './feedbackmaster.component';

const routes: Routes = [{
  path: '',
  component: FeedbackmasterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackmasterRoutingModule { }
