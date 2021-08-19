import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcemasterRoutingModule } from './resourcemaster-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ResourcemasterComponent } from './resourcemaster.component';


@NgModule({
  declarations: [
    ResourcemasterComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ResourcemasterRoutingModule,
    
  ]
})
export class ResourcemasterModule { }
