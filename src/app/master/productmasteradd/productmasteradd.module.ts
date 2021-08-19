import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductmasteraddRoutingModule } from './productmasteradd-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProductmasteraddComponent } from './productmasteradd.component';


@NgModule({
  declarations: [ProductmasteraddComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductmasteraddRoutingModule
  ]
})
export class ProductmasteraddModule { }
