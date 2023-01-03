import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingApiService } from '../service/loading-api.service';
import * as moment from 'moment';
import { AddNewHblItemComponent } from '../hbl-detail/add-new-hbl-item/add-new-hbl-item.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-popup-loading',
  templateUrl: './complete-popup.component.html',
  styleUrls: ['./complete-popup.component.scss']
})
export class CompletePopupComponent implements OnInit {
  container_number: any;
  jobNo: any;
  selectedContainer: any;
  actualSeal: any;
  isLoading = true;
  selectedHbl: any;
  subjob_no: any;
  segment_code: any;
  isUploadClicked: boolean = false;


  constructor(
    public dialogRef: MatDialogRef<AddNewHblItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public devanningApiService: LoadingApiService,
    private _snackBar: MatSnackBar,
    public router: Router,

  ) { }

  ngOnInit(): void {
      let incomingDate: any = moment(this.selectedContainer.unloading_date).format().split(':');
      incomingDate = incomingDate[0] + ':' + incomingDate[1];
      let today: any = moment().format().split(':');
      today = today[0] + ':' + today[1];
      this.selectedContainer.unloading_date =  this.selectedContainer.unloading_date ? incomingDate : today;
  }

  
  ok(): void {
    this.postActualSeal();
}

postActualSeal(): void {
  if(!this.isUploadClicked){
    this.isUploadClicked = true;
  let details: any = {
    actualSeal:   this.selectedContainer.actual_seal,
    unloadingDate: moment(this.selectedContainer.unloading_date).format('DD-MMM-YYYY HH:MM') ,
  }
  this.isLoading = true;
  this.devanningApiService.saveSeal(details, this.selectedContainer).subscribe( (data:any) => {
  this.devanningApiService.complete(this.selectedHbl, this.selectedContainer).subscribe( ( data: any) => {
    this.isLoading = false;
    this._snackBar.open('Container Unloaded Successfully completed!', 'OK', {duration: 2000});
        this.dialogRef.close();
        this.router.navigate(['/home']);

        this.isUploadClicked = false;
      }, err => {
        this._snackBar.open('Container Unloaded Not completed!', 'OK', {duration: 2000});
  });
    
  });
  this.dialogRef.close('ok');
}
}
}
