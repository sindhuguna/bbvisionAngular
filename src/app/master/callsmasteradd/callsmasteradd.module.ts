import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallsmasteraddRoutingModule } from './callsmasteradd-routing.module';
import { CallsmasteraddComponent } from './callsmasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [CallsmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    CallsmasteraddRoutingModule
  ]
})
export class CallsmasteraddModule { }
