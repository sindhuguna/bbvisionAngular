import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefixmasterRoutingModule } from './prefixmaster-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PrefixmasterComponent } from './prefixmaster.component';


@NgModule({
  declarations: [
    PrefixmasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PrefixmasterRoutingModule,
    
  ]
})
export class PrefixmasterModule { }
