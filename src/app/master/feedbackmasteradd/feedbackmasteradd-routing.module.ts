import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackmasteraddComponent } from './feedbackmasteradd.component';

const routes: Routes = [{
  path: '',
  component: FeedbackmasteraddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackmasteraddRoutingModule { }
