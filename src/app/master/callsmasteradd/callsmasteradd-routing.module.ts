import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsmasteraddComponent } from './callsmasteradd.component';

const routes: Routes = [{ path: "", component: CallsmasteraddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallsmasteraddRoutingModule { }
