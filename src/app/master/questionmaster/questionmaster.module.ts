import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionmasterRoutingModule } from './questionmaster-routing.module';
import { QuestionmasterComponent } from './questionmaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [QuestionmasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    QuestionmasterRoutingModule
  ]
})
export class QuestionmasterModule { }
