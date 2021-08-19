import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryRoutingModule } from './enquiry-routing.module';
import { EnquiryComponent } from './enquiry.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    EnquiryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnquiryRoutingModule
  ]
})
export class EnquiryModule { }
