import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryadvanceRoutingModule } from './salaryadvance-routing.module';
import { SalaryadvanceComponent } from './salaryadvance.component';
import { SharedModule } from '../shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SalaryadvanceComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule, 
    SalaryadvanceRoutingModule
  ]
})
export class SalaryadvanceModule { }
