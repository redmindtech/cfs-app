import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CargoDeliveryService } from '../cargo-delivery.service';
import { SaveFailStatusComponent } from '../save-fail-status/save-fail-status.component';
import { StatusPopupComponent } from '../status-popup/status-popup.component';
import { UploadPhotoPopupComponent } from '../upload-photo-popup/upload-photo-popup.component';

@Component({
  selector: 'app-delivery-details-popup',
  templateUrl: './delivery-details-popup.component.html',
  styleUrls: ['./delivery-details-popup.component.scss']
})
export class DeliveryDetailsPopupComponent implements OnInit {
  details: any;
  bookingList: any= {};
  types: any;
  packageType: any;
  truckName: any;
  driverName: any;
  Volumn: any;
  Weight: any;
  saveItems: any;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cargoDeliveryService: CargoDeliveryService

  ) { }

  ngOnInit(): void {
    this.details = this.data.bookingList.Delivery_BL[0];
    this.cargoDeliveryService.packType().subscribe( (data:any) => {
      this.types = data.Delivery_BL.map( (item: any) => {
        return { value: item.port_code, viewValue: item.port_name }
      });
    });
   
  }

  uploadPhoto(): void {
    const uploadPopupRef = this.dialog.open(UploadPhotoPopupComponent, {
      width: '80%',
      height: '90%',
      data: { }
    });
    // uploadPopupRef.componentInstance.source = 'B';
    // uploadPopupRef.componentInstance.selectedBookingNumber = this.selectedBookingNumber;
    // uploadPopupRef.componentInstance.draftCfsNo = this.draft_cfs_no;
    
    uploadPopupRef.afterClosed().subscribe( (result: any) => {
    });
  }
  save(): void {
    // let saveItems: any = {
    //   packages: this.details.packages ? this.details.packages : '',
    //   pack_type: this.details.pack_type ? this.details.pack_type : '',
    //   truckName: this.truckName ? this.truckName : '',
    //   driverName: this.driverName ? this.driverName : '',
    //   volume: this.details.volume ? this.details.volume : '',
    //   weight: this.details.weight ? this.details.weight : '',
      
    // }
    // this.cargoDeliveryService.saveDeliveryDetails(saveItems).subscribe( (data:any) => {
    //   const uploadPopupRef = this.dialog.open(StatusPopupComponent, {
    //     width: '400px',
    //     data: { }
    //   });
    // }, err => {
    //   const uploadPopupRef = this.dialog.open(SaveFailStatusComponent, {
    //     width: '400px',
    //     data: { }
    //   });
    // });

    const uploadPopupRef = this.dialog.open(StatusPopupComponent, {
      width: '400px',
      data: { }
    });
    uploadPopupRef.afterClosed().subscribe( (result: any) => {
    });

  }
}
