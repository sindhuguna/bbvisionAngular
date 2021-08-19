import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductmasterComponent } from './productmaster.component';

const routes: Routes = [{path:"",component: ProductmasterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductmasterRoutingModule { }
