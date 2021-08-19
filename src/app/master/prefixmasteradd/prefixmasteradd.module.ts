import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrefixmasteraddRoutingModule } from './prefixmasteradd-routing.module';
import { PrefixmasteraddComponent } from './prefixmasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PrefixmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PrefixmasteraddRoutingModule
  ]
})
export class PrefixmasteraddModule { }
