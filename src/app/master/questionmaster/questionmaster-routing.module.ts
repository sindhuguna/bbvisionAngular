import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionmasterComponent } from './questionmaster.component';

const routes: Routes = [{
  path: '',
  component: QuestionmasterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionmasterRoutingModule { }
