import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcemasteraddRoutingModule } from './resourcemasteradd-routing.module';
import { ResourcemasteraddComponent } from './resourcemasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ResourcemasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ResourcemasteraddRoutingModule
  ]
})
export class ResourcemasteraddModule { }
