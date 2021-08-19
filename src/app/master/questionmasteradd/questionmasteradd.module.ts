import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionmasteraddRoutingModule } from './questionmasteradd-routing.module';
import { QuestionmasteraddComponent } from './questionmasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [QuestionmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    QuestionmasteraddRoutingModule
  ]
})
export class QuestionmasteraddModule { }
