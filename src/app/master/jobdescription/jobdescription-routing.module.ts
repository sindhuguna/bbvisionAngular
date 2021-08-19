import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobdescriptionComponent } from './jobdescription.component';

const routes: Routes = [{ path: '', component: JobdescriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobdescriptionRoutingModule { }
