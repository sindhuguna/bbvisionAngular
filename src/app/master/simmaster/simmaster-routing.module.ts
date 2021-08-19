import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimmasterComponent } from './simmaster.component';

const routes: Routes = [{
  path: '',
  component: SimmasterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimmasterRoutingModule { }
