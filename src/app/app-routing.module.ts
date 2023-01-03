import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then( m => m.LoginModule ) },
  { path: 'home',
  canActivate: [AuthGuard],
   loadChildren: () => import('./modules/home/home.module').then( m=> m.HomeModule ) },
  { path: 'devanning',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/devanning/devanning.module').then( m => m.DevanningModule )},
  // { path: 'CargoAcceptance',
  //   canActivate: [AuthGuard], 
  //   loadChildren: () => import('./modules/cargo-acceptance/cargo-acceptance.module').then( a => a.CargoAcceptanceModule)},
    { path:'CargoDelivery',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/cargo-delivery/cargo-delivery.module').then ( a => a.CargoDeliveryModule)},
  //   { path: 'CargoAcceptance/noBooking',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./modules/cargo-acceptance-no-booking/cargo-acceptance-no-booking.module').then ( a => a.CargoAcceptanceNoBookingModule)},
    { path: 'Loading',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/loading/loading.module').then ( a => a.LoadingModule)},
    // { path: 'LocationTransfer',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./modules/location-transfer/location-transfer.module').then ( a => a.LocationTransferModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
