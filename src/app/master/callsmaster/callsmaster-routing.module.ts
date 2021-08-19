import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsmasterComponent } from './callsmaster.component';

const routes: Routes = [{path:"",component:CallsmasterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallsmasterRoutingModule { }
