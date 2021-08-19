import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserrolemasterComponent } from './userrolemaster.component';

const routes: Routes = [{ path: '', component: UserrolemasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserrolemasterRoutingModule { }
