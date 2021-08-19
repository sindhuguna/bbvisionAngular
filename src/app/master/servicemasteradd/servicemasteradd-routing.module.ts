import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicemasteraddComponent } from './servicemasteradd.component';

const routes: Routes = [{
  path: '',
  component: ServicemasteraddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicemasteraddRoutingModule { }
