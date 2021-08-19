import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionmasteraddComponent } from './questionmasteradd.component';

const routes: Routes = [{
  path: '',
  component: QuestionmasteraddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionmasteraddRoutingModule { }
