import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetmasterComponent } from './assetmaster.component';



const routes: Routes = [{ path: '', component: AssetmasterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AssetmasterRoutingModule { }
