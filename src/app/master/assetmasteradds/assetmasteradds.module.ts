import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetmasteraddsRoutingModule } from './assetmasteradds-routing.module';
import { AssetmasteraddsComponent } from './assetmasteradds.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AssetmasteraddsComponent,
 
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AssetmasteraddsRoutingModule
  ]
})
export class AssetmasteraddsModule { }
