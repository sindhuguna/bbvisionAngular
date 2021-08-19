import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanymasteraddRoutingModule } from './companymasteradd-routing.module';
import { CompanymasteraddComponent } from './companymasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompanymasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CompanymasteraddRoutingModule
  ]
})
export class CompanymasteraddModule { }
