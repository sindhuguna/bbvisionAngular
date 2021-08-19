import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientmasteraddRoutingModule } from './clientmasteradd-routing.module';
import { ClientmasteraddComponent } from './clientmasteradd.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [ClientmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClientmasteraddRoutingModule
  ]
})
export class ClientmasteraddModule { }
