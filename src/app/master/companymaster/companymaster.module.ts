import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanymasterRoutingModule } from './companymaster-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CompanymasterComponent } from './companymaster.component';


@NgModule({
  declarations: [
    CompanymasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CompanymasterRoutingModule,
    
  ]
})
export class CompanymasterModule { }
