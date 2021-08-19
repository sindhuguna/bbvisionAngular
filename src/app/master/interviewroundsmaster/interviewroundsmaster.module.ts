import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewroundsmasterRoutingModule } from './interviewroundsmaster-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { InterviewroundsmasterComponent } from './interviewroundsmaster.component';


@NgModule({
  declarations: [
    InterviewroundsmasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    InterviewroundsmasterRoutingModule,
    
  ]
})
export class InterviewroundsmasterModule { }
