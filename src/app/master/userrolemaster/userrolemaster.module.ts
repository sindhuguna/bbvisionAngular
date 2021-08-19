import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserrolemasterRoutingModule } from './userrolemaster-routing.module';
import { UserrolemasterComponent } from './userrolemaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    UserrolemasterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserrolemasterRoutingModule
  ]
})
export class UserrolemasterModule { }
