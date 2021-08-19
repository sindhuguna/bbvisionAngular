import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetmasterRoutingModule } from './assetmaster-routing.module';
import { AssetmasterComponent } from './assetmaster.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';




@NgModule({
  
  declarations: [
    AssetmasterComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    AssetmasterRoutingModule
  ]
  
})
export class AssetmasterModule { }
