import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcemasterComponent } from './resourcemaster.component';

const routes: Routes = [{
  path: '',
  component: ResourcemasterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcemasterRoutingModule { }
