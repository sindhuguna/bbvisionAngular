import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductmasteraddComponent } from './productmasteradd.component';

const routes: Routes = [{path:"",component:ProductmasteraddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductmasteraddRoutingModule { }
