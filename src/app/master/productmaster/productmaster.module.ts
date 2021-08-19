import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductmasterRoutingModule } from './productmaster-routing.module';
import { ProductmasterComponent } from './productmaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [ProductmasterComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductmasterRoutingModule
  ]
})
export class ProductmasterModule { }
