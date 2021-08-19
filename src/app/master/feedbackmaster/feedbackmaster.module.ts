import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackmasterRoutingModule } from './feedbackmaster-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FeedbackmasterComponent } from './feedbackmaster.component';


@NgModule({
  declarations: [
    FeedbackmasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FeedbackmasterRoutingModule,
    
  ]
})
export class FeedbackmasterModule { }
