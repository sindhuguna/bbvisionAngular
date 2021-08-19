import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobdescriptionaddComponent } from './jobdescriptionadd.component';

const routes: Routes = [{ path: '', component: JobdescriptionaddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobdescriptionaddRoutingModule { }
