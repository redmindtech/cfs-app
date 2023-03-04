import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargoDeliveryRoutingModule } from './cargo-delivery-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from 'src/app/shared/shared.module';
import { CargoDeliveryComponent } from './cargo-delivery.component';
import { ListDeliveryComponent } from './list-delivery/list-delivery.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { DeliveryDetailsPopupComponent } from './delivery-details-popup/delivery-details-popup.component';
import { UploadPhotoPopupComponent } from './upload-photo-popup/upload-photo-popup.component';
import { StatusPopupComponent } from './status-popup/status-popup.component';
import { DeliveryFailStatusComponent } from './delivery-fail-status/delivery-fail-status.component';
import { SaveFailStatusComponent } from './save-fail-status/save-fail-status.component';
import { CompleteStatusPopupComponent } from './complete-status-popup/complete-status-popup.component';



@NgModule({
  declarations: [
    CargoDeliveryComponent,
    ListDeliveryComponent,
    DeliveryDetailsComponent,
    DeliveryDetailsPopupComponent,
    UploadPhotoPopupComponent,
    StatusPopupComponent,
    DeliveryFailStatusComponent,
    SaveFailStatusComponent,
    CompleteStatusPopupComponent,
    
  ],
  imports: [
    CommonModule,
    CargoDeliveryRoutingModule,
    SharedModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatDialogModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ]
})
export class CargoDeliveryModule { }
