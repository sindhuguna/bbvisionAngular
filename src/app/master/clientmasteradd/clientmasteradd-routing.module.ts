import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientmasteraddComponent } from './clientmasteradd.component';

const routes: Routes = [{path:"", component: ClientmasteraddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientmasteraddRoutingModule { }
