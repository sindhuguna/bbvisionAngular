import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicemasterRoutingModule } from './servicemaster-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ServicemasterComponent } from './servicemaster.component';


@NgModule({
  declarations: [
    ServicemasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ServicemasterRoutingModule,
    
  ]
})
export class ServicemasterModule { }
