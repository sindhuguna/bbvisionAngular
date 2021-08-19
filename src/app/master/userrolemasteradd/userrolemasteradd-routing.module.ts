import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserrolemasteraddComponent } from './userrolemasteradd.component';

const routes: Routes = [{ path: '', component: UserrolemasteraddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserrolemasteraddRoutingModule { }
