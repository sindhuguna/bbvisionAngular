import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrefixmasterComponent } from './prefixmaster.component';

const routes: Routes = [{
  path: '',
  component: PrefixmasterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrefixmasterRoutingModule { }
