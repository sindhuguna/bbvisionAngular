import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimmasterRoutingModule } from './simmaster-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SimmasterComponent } from './simmaster.component';


@NgModule({
  declarations: [
    SimmasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SimmasterRoutingModule,
    
  ]
})
export class SimmasterModule { }
