import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserrolemasteraddRoutingModule } from './userrolemasteradd-routing.module';
import { UserrolemasteraddComponent } from './userrolemasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    UserrolemasteraddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserrolemasteraddRoutingModule
  ]
})
export class UserrolemasteraddModule { }
