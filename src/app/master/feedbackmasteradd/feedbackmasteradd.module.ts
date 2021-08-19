import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackmasteraddRoutingModule } from './feedbackmasteradd-routing.module';
import { FeedbackmasteraddComponent } from './feedbackmasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeedbackmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FeedbackmasteraddRoutingModule
  ]
})
export class FeedbackmasteraddModule { }
