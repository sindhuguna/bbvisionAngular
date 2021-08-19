import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientmasterComponent } from './clientmaster.component';

const routes: Routes = [{path:"",component: ClientmasterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientmasterRoutingModule { }
