import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingRoutingModule } from './loading-routing.modules';
import { LoadingComponent } from './loading.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListHBLComponent } from './list-hbl/list-hbl.component';
import { HblDetailComponent } from './hbl-detail/hbl-detail.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { LoadingApiService } from './service/loading-api.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddNewHblItemComponent } from './hbl-detail/add-new-hbl-item/add-new-hbl-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerDetailsPopupComponent } from './container-details-popup/container-details-popup.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BarcodeScannerPopupComponent } from './barcode-scanner-popup/barcode-scanner-popup.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { UploadPhotoPopupComponent } from './upload-photo-popup/upload-photo-popup.component';
import { UnloadItemDetailsPopupComponent } from './unload-item-details-popup/unload-item-details-popup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CompletePopupComponent } from './complete-popup/complete-popup.component';
import { ActualSealComponent } from './actual-seal/actual-seal.component';
import { LabelComponent } from './label/label.component';
import { PreviewComponent } from './preview/preview.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ListContainerComponent,
    ListHBLComponent,
    HblDetailComponent,
    AddNewHblItemComponent,
    ContainerDetailsPopupComponent,
    BarcodeScannerPopupComponent,
    UploadPhotoPopupComponent,
    UnloadItemDetailsPopupComponent,
    CompletePopupComponent,
    ActualSealComponent,
    LabelComponent,
    PreviewComponent
  ],
  providers: [
    LoadingApiService
  ],
  imports: [
    CommonModule,
    LoadingRoutingModule,
    SharedModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    MatSnackBarModule
  ]
})
export class LoadingModule { }