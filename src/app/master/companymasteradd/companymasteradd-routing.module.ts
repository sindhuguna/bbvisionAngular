import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanymasteraddComponent } from './companymasteradd.component';

const routes: Routes = [{
  path: '',
  component: CompanymasteraddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanymasteraddRoutingModule { }
