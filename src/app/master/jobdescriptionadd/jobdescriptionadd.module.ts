import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobdescriptionaddRoutingModule } from './jobdescriptionadd-routing.module';
import { JobdescriptionaddComponent } from './jobdescriptionadd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    JobdescriptionaddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JobdescriptionaddRoutingModule
  ]
})
export class JobdescriptionaddModule { }
