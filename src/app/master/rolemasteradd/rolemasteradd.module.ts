import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolemasteraddRoutingModule } from './rolemasteradd-routing.module';
import { RolemasteraddComponent } from './rolemasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RolemasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RolemasteraddRoutingModule
  ]
})
export class RolemasteraddModule { }
