import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicemasteraddRoutingModule } from './servicemasteradd-routing.module';
import { ServicemasteraddComponent } from './servicemasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ServicemasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ServicemasteraddRoutingModule
  ]
})
export class ServicemasteraddModule { }
