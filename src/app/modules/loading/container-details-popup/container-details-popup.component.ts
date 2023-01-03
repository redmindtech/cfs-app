import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewHblItemComponent } from '../hbl-detail/add-new-hbl-item/add-new-hbl-item.component';
import { LoadingApiService } from '../service/loading-api.service';
import { UploadPhotoPopupComponent } from '../upload-photo-popup/upload-photo-popup.component';

@Component({
  selector: 'app-container-details-popup-loading',
  templateUrl: './container-details-popup.component.html',
  styleUrls: ['./container-details-popup.component.scss']
})
export class ContainerDetailsPopupComponent implements OnInit {
  selectedContainer: any;
  selectedHbl: any;
  jobNo: any;
  hblNumber: any;

  constructor(
    public dialogRef: MatDialogRef<AddNewHblItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public devanningApiService: LoadingApiService
  ) { }

  ngOnInit(): void {
    this.selectedContainer = this.data;
  }

  // uploadPhoto(): void {
  //   const dialogRef = this.dialog.open(UploadPhotoPopupComponent, {
  //     width: '80%',
  //     height: '90%',
  //     data: { jobNo: this.jobNo, }
  //   });
  //   dialogRef.componentInstance.job_no = this.jobNo;
  //   dialogRef.componentInstance.house_no = this.hblNumber; 
  //   dialogRef.componentInstance.segment_code = this.selectedContainer.segment_code;
  //   dialogRef.componentInstance.source = 'M';
  //   dialogRef.componentInstance.selectedContainer = this.selectedContainer;
  //   dialogRef.componentInstance.selectedHbl = "";
  //   dialogRef.componentInstance.subjob_no = 0;
    
  //   dialogRef.afterClosed().subscribe( (result: any) => {
  //   });
  // }

}
