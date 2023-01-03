import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BarcodeScannerPopupComponent } from './barcode-scanner-popup/barcode-scanner-popup.component';
import { ContainerDetailsPopupComponent } from './container-details-popup/container-details-popup.component';
import { UploadPhotoPopupComponent } from './upload-photo-popup/upload-photo-popup.component';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isContainerExpanded = true;
  isHblExpanded = false;
  isHblDetailsExpanded = true;
  selectedContainer: any = null;
  selectedHbl: any = null;
  tabIndex = 0;
  isContainerSearch = false;
  isHblSearch = false;
  containerSearchFC = new FormControl();
  hblSearchFC = new FormControl();
  showMobileContainerSearch = false;
  showMobileHblSearch = false;
  jobNo: any;
  hblNumber: any;  

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    console.log('on inits')
  }

  containerSelected(container: any): void {
    console.log(container);
    this.selectedContainer = container;
    this.isContainerExpanded = false;
    this.isHblExpanded = true;
    this.tabIndex = 1;
    this.selectedHbl = null;
    
  }

  hblSelected(hbl: any): void {
    this.selectedHbl = hbl;
    this.tabIndex = 2;
  }

  openContainerDetailsPopup(container: any): void {
    const dialogRef = this.dialog.open(ContainerDetailsPopupComponent, {
      // width: '80%',
      // height: '90%',
      data: container
    });
    dialogRef.disableClose = true;
  }

  openContainerScannerPopup(formControl: FormControl, page: string): void {
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
    if( page === 'container-mobile' ) {
      this.showMobileContainerSearch = true;
    }
    if( page === 'container-desktop' ) {
      this.isContainerSearch = true;
    }
  }

  
  openScannerPopup(formControl: FormControl, page: string): void {
    const dialogRef = this.dialog.open(BarcodeScannerPopupComponent, {
      // width: '80%',
      // height: '90%',
      height: '450px',
      width: '400px',
    });
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
    if( page === 'hbl-mobile' ) {
      this.showMobileHblSearch = true;
    }
    if( page === 'hbl-desktop' ) {
      this.isHblSearch = true;
    }
  }

  uploadPhoto(): void {
    const dialogRef = this.dialog.open(UploadPhotoPopupComponent, {
      width: '80%',
      height: '90%',
      data: { jobNo: this.jobNo, }
    });
    dialogRef.componentInstance.job_no = this.jobNo;
    dialogRef.componentInstance.house_no = this.hblNumber; 
    dialogRef.componentInstance.segment_code = this.selectedContainer.segment_code;
    dialogRef.componentInstance.source = 'M';
    dialogRef.componentInstance.selectedContainer = this.selectedContainer;
    dialogRef.componentInstance.selectedHbl = "";
    dialogRef.componentInstance.subjob_no = 0;
    
    dialogRef.afterClosed().subscribe( (result: any) => {
    });
  }
}

