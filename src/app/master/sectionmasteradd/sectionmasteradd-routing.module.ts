import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionmasteraddComponent } from './sectionmasteradd.component';

const routes: Routes = [{
  path: '',
  component: SectionmasteraddComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // imports: [RouterModule.forRoot(
  //   routes,
  //   { enableTracing: true } 
  // )],
  exports: [RouterModule]
})
export class SectionmasteraddRoutingModule { }
