import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CompletePopupComponent } from '../complete-popup/complete-popup.component';
import { LabelComponent } from '../label/label.component';
import { LoadingApiService } from '../service/loading-api.service';
import { UnloadItemDetailsPopupComponent } from '../unload-item-details-popup/unload-item-details-popup.component';
import { UploadPhotoPopupComponent } from '../upload-photo-popup/upload-photo-popup.component';
import { AddNewHblItemComponent } from './add-new-hbl-item/add-new-hbl-item.component';

@Component({
  selector: 'app-hbl-detail-loading',
  templateUrl: './hbl-detail.component.html',
  styleUrls: ['./hbl-detail.component.scss']
})
export class HblDetailComponent implements OnInit, OnChanges {

  @Input() selectedHbl: any;
  @Input() selectedContainer: any;
  isLoading = false;
  dataSource = [];
  displayedColumns = [ 'receivedPiece', 'damageNotes', 'actions'];
  jobNo: any;
  hblNumber: any;
  constructor(
    public dialog: MatDialog,
    public devanningApiService: LoadingApiService
  ) { }
 
  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if ( this.selectedContainer && this.selectedHbl ) {
        this.loadData(); 
    }
  }

  loadData(): void {
    this.isLoading = true;
    this.devanningApiService.getUnloadDetails(this.selectedHbl, this.selectedContainer).subscribe( data => {
      this.dataSource = data.items_list;
      if(this.dataSource) {
        let total = 0;
        this.dataSource.forEach((item: any) =>{
          total = Number(total) + Number(item.rcvd_qty)
        })
        this.selectedHbl.unloaded = total;
        let balance = this.selectedHbl.manifestedPieces - this.selectedHbl.unloaded;
        this.selectedHbl.balance = balance > 0 ? balance : 0 ;
        
      } else {
        this.selectedHbl.unloaded = 0;
        this.selectedHbl.balance = this.selectedHbl.manifestedPieces;
       
      }
      this.isLoading = false;
    })
  }

  addItem(): void {
    const dialogRef = this.dialog.open(AddNewHblItemComponent, {
      width: '70%',
      height: '50%',
      data: {}
    });
    dialogRef.disableClose = true;
    dialogRef.componentInstance.containerNo = this.selectedContainer.container_number;
    dialogRef.componentInstance.jobNo = this.selectedContainer.job_no;
    dialogRef.componentInstance.hblNumber = this.selectedHbl.hblNumber; 
    dialogRef.componentInstance.selectedHbl = this.selectedHbl; 
    dialogRef.componentInstance.selectedContainer = this.selectedContainer; 
    dialogRef.componentInstance.subJobNo = this.selectedHbl.subjob_no;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if ( result) {
        this.selectedHbl.unloaded = this.selectedHbl.unloaded + result.receivedPiece;
        this.selectedHbl.balance = this.selectedHbl.manifestedPieces - this.selectedHbl.unloaded;
        this.devanningApiService.addUnloadEntry(this.selectedContainer.container, this.selectedHbl.hblNumber, result);
        this.loadData();
      } else {
        this.loadData();
      }
    });
  }

  unloadItem(element: any): void{
    const dialogRef = this.dialog.open(UnloadItemDetailsPopupComponent, {
      height: '390px',
      width: '400px',
      data: element
    });
    dialogRef.disableClose = true;
    // console.log(data,'djksdjfkdfkdkdgkdf')
  }

  // editItem(tableRowObject: any): void {
  //   const dialogRef = this.dialog.open(AddNewHblItemComponent, {
  //     width: '80%',
  //     height: '90%',
  //     data: {}
  //   });  
  //   dialogRef.componentInstance.tableRowObject = tableRowObject;
  // }
  
  DeleteItem(data: any, dataSource: any, i: any,house_no: any ): void {
    data.sl_no;
    data.job_no;
    data.segment_code;
    house_no;
    this.isLoading = true;
    this.devanningApiService.deleteItem(data.sl_no, data.job_no, data.segment_code,house_no).subscribe( (data) => {
      this.isLoading = false;
      console.log(data,'delete api')
      this.loadData();
    })

  }
  complete(): void {
    const dialogRef = this.dialog.open(CompletePopupComponent, {
      // height: '390px',
      width: '400px',
      data: {jobNo: this.jobNo,}
    });
    dialogRef.disableClose = true;
    dialogRef.componentInstance.selectedContainer = this.selectedContainer;
    dialogRef.componentInstance.container_number = this.selectedContainer.container_number;
    dialogRef.componentInstance.jobNo = this.selectedContainer.job_no;
    dialogRef.componentInstance.selectedHbl = this.selectedHbl; 
    dialogRef.componentInstance.subjob_no = this.selectedHbl.subjob_no;
    dialogRef.componentInstance.segment_code = this.selectedContainer.segment_code;
  }

  uploadPhoto(): void {
    const uploadPopupRef = this.dialog.open(UploadPhotoPopupComponent, {
      width: '80%',
      height: '90%',
      data: { jobNo: this.jobNo, }
    });
    uploadPopupRef.componentInstance.job_no = this.jobNo;
    uploadPopupRef.componentInstance.house_no = this.hblNumber;
    uploadPopupRef.componentInstance.segment_code = this.selectedContainer.segment_code;
    uploadPopupRef.componentInstance.source = 'H';
    uploadPopupRef.componentInstance.selectedContainer = this.selectedContainer;
    uploadPopupRef.componentInstance.selectedHbl = this.selectedHbl;
    uploadPopupRef.componentInstance.subjob_no = this.selectedHbl.subjob_no;
    
    uploadPopupRef.afterClosed().subscribe( (result: any) => {
    });
  }

  label(element: any): void {
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '400px',
      // height: '90%',
      data: { jobNo: this.jobNo, }
    });
    dialogRef.disableClose = true;
    dialogRef.componentInstance.selectedContainer = this.selectedContainer;
    dialogRef.componentInstance.container_number = this.selectedContainer.container_number;
    dialogRef.componentInstance.jobNo = this.selectedContainer.job_no;
    dialogRef.componentInstance.selectedHbl = this.selectedHbl; 
    dialogRef.componentInstance.subjob_no = this.selectedHbl.subjob_no;
    dialogRef.componentInstance.segment_code = this.selectedContainer.segment_code;
    dialogRef.componentInstance.unload = this.selectedHbl.unloaded;
  }

}
