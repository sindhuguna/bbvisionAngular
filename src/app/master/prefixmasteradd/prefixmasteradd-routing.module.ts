import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrefixmasteraddComponent } from './prefixmasteradd.component';

const routes: Routes = [{
  path: '',
  component: PrefixmasteraddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrefixmasteraddRoutingModule { }
