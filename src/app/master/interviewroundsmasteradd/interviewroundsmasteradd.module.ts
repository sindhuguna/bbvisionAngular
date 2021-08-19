import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewroundsmasteraddRoutingModule } from './interviewroundsmasteradd-routing.module';
import { InterviewroundsmasteraddComponent } from './interviewroundsmasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [InterviewroundsmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    InterviewroundsmasteraddRoutingModule
  ]
})
export class InterviewroundsmasteraddModule { }
