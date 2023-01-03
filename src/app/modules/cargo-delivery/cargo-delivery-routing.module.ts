import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoDeliveryComponent } from './cargo-delivery.component';

const routes: Routes = [
  { path: '', component: CargoDeliveryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargoDeliveryRoutingModule { }
