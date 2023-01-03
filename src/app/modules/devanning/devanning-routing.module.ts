import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevanningComponent } from './devanning.component';

const routes: Routes = [
  { path: '', component: DevanningComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevanningRoutingModule { }
