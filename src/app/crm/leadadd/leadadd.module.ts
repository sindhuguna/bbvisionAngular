import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadaddRoutingModule } from './leadadd-routing.module';
import { LeadaddComponent } from './leadadd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    LeadaddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LeadaddRoutingModule
  ]
})
export class LeadaddModule { }
