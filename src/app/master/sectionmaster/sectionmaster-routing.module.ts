import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionmasterComponent } from './sectionmaster.component';

const routes: Routes = [{
  path: '',
  component: SectionmasterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class SectionmasterRoutingModule { }
