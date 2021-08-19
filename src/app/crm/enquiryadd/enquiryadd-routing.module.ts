import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryaddComponent } from './enquiryadd.component';

const routes: Routes = [{ path: '', component: EnquiryaddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryaddRoutingModule { }
