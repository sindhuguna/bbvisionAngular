import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicemasterComponent } from './servicemaster.component';

const routes: Routes = [{
  path: '',
  component: ServicemasterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicemasterRoutingModule { }
