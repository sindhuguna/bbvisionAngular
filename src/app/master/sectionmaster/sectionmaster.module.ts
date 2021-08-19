import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionmasterRoutingModule } from './sectionmaster-routing.module';
import { SectionmasterComponent } from './sectionmaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [SectionmasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    SectionmasterRoutingModule
  ]
})
export class SectionmasterModule { }
