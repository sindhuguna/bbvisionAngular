import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewmappingmasterRoutingModule } from './interviewmappingmaster-routing.module';
import { InterviewmappingmasterComponent } from './interviewmappingmaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [InterviewmappingmasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    InterviewmappingmasterRoutingModule
  ]
})
export class InterviewmappingmasterModule { }
