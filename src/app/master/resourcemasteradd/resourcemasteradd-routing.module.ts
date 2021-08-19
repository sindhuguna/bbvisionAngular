import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcemasteraddComponent } from './resourcemasteradd.component';

const routes: Routes = [{
  path: '',
  component: ResourcemasteraddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcemasteraddRoutingModule { }
