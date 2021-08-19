import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientmasterRoutingModule } from './clientmaster-routing.module';
import { ClientmasterComponent } from './clientmaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [ClientmasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClientmasterRoutingModule
  ]
})
export class ClientmasterModule { }
