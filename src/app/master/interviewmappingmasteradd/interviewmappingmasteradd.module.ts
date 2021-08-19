import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewmappingmasteraddRoutingModule } from './interviewmappingmasteradd-routing.module';
import { InterviewmappingmasteraddComponent } from './interviewmappingmasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [InterviewmappingmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    InterviewmappingmasteraddRoutingModule
  ]
})
export class InterviewmappingmasteraddModule { }
