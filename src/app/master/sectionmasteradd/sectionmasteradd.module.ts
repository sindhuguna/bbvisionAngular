import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionmasteraddRoutingModule } from './sectionmasteradd-routing.module';
import { SectionmasteraddComponent } from './sectionmasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [SectionmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    SectionmasteraddRoutingModule
  ]
})
export class SectionmasteraddModule { }
