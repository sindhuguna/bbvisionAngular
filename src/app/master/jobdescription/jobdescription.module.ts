import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { JobdescriptionRoutingModule } from './jobdescription-routing.module';
import { JobdescriptionComponent } from './jobdescription.component';


@NgModule({
  declarations: [
    JobdescriptionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    JobdescriptionRoutingModule
  ]
})
export class JobdescriptionModule { }
