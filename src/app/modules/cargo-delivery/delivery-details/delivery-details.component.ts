import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryDetailsPopupComponent } from '../delivery-details-popup/delivery-details-popup.component';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.scss']
})
export class DeliveryDetailsComponent implements OnInit {
  isUploadClicked: boolean = false;
  @Input() bookingList: any;
  details: any;
  isSuccess: boolean = true;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.details = this.bookingList;
  }

  deliveryItem(): void {
    if(!this.isUploadClicked){
      this.isUploadClicked = true;
      const dialogRef = this.dialog.open(DeliveryDetailsPopupComponent, {
        height: '400px',
      width: '400px',
        data: { bookingList: this.bookingList}
      });
      dialogRef.disableClose = true; 

    dialogRef.afterClosed().
    subscribe(result => {
    });
    this.isUploadClicked = false;
  }
  }
}
