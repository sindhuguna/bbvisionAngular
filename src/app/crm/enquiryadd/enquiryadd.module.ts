import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryaddRoutingModule } from './enquiryadd-routing.module';
import { EnquiryaddComponent } from './enquiryadd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    EnquiryaddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnquiryaddRoutingModule
  ]
})
export class EnquiryaddModule { }
