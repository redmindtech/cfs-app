import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BarcodeScannerPopupComponent } from '../devanning/barcode-scanner-popup/barcode-scanner-popup.component';
import { CargoDeliveryService } from './cargo-delivery.service';
import { DeliveryFailStatusComponent } from './delivery-fail-status/delivery-fail-status.component';

@Component({
  selector: 'app-cargo-delivery',
  templateUrl: './cargo-delivery.component.html',
  styleUrls: ['./cargo-delivery.component.scss']
})
export class CargoDeliveryComponent implements OnInit {

  

  bookingSearchFC = new FormControl();
  isBookingSearch = false;
  isBookingExpanded = true;
  showMobileBookingSearch = false;
  selectedBookingNumber: any = null;
  tabIndex = 0;
  search: any;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  bookingNumber: any = [];
  isSearchLoading = false;
  bookingList: any;
  selectedValue = '';

  constructor(
    public dialog: MatDialog,
    public cargoDeliveryService: CargoDeliveryService

  ) { }

  ngOnInit(): void {
   
  }

 

  bookingNumberSelected(Booking: any): void {
    this.selectedBookingNumber = Booking;
    this.tabIndex = 1;
  }

  openBookingNumberScannerPopup(formControl: FormControl, page: string): void {
    const dialogRef = this.dialog.open(BarcodeScannerPopupComponent, {
      height: '450px',
      width: '400px',
    });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe( data => {
      formControl.setValue(data);
      const canVibrate = window.navigator.vibrate
        if (canVibrate as any) { 
          window.navigator.vibrate(100)
          setTimeout(() => {
            window.navigator.vibrate(0);
          }, 500); 
        }
    });
    if( page === 'Booking-mobile' ) {
      this.showMobileBookingSearch = true;
    }
    if( page === 'Booking-desktop' ) {
      this.isBookingSearch = true;
    }
  }


  clearSearch(): void {
    this.isBookingSearch = !this.isBookingSearch; this.bookingSearchFC.setValue('');
    this.search = "";
    this.bookingNumber = [];
  }

  
  getBookingListFun(number: number): void {
    // this.isSearchLoading = true;
    // this.cargoAcceptanceService.getBookingList(number).subscribe( (data: any) => {
    //   this.isSearchLoading = false;
    //   if ( data && data.booking_list.length > 0 ) {
    //     this.bookingList = { ...data, booking_list: [ data.booking_list[0] ] } ;
    //     this.bookingList.booking_list[0].isSelected = true;
    //     this.bookingNumberSelected(this.bookingList.booking_list[0]);
    //   }
    // }, err => this.isSearchLoading = false)
  };

  searchBooking(): void {
    this.cargoDeliveryService.getCargoDeliveryList(this.search).subscribe( (data:any) => {
      this.bookingList = data;
      console.log(data);
      
       if(this.bookingList.Delivery_BL[0].status == 'FAILED'){
        const dialogRef = this.dialog.open(DeliveryFailStatusComponent, {
          // height: '400px',
        width: '400px',
          data: {}
        });
      }
    });
    
  }

  allClosed() {
    this.bookingList = null;
    this.myControl.setValue('', {emitEvent: false});
  }

}
