import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallsmasterRoutingModule } from './callsmaster-routing.module';
import { CallsmasterComponent } from './callsmaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [CallsmasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    CallsmasterRoutingModule
  ]
})
export class CallsmasterModule { }
