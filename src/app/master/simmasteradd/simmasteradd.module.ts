import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimmasteraddRoutingModule } from './simmasteradd-routing.module';
import { SimmasteraddComponent } from './simmasteradd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [SimmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    SimmasteraddRoutingModule
  ]
})
export class SimmasteraddModule { }
