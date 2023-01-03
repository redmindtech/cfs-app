import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewHblItemComponent } from '../hbl-detail/add-new-hbl-item/add-new-hbl-item.component';
import { LoadingApiService } from '../service/loading-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-actual-seal-loading',
  templateUrl: './actual-seal.component.html',
  styleUrls: ['./actual-seal.component.scss']
})
export class ActualSealComponent implements OnInit {

  containerNo: any;
  jobNo: any;
  selectedContainer: any;
  actualSeal: any;
  isLoading = true;


  constructor(
    public dialogRef: MatDialogRef<AddNewHblItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public devanningApiService: LoadingApiService

  ) { }

  ngOnInit(): void {
    this.selectedContainer = this.data;  

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
    let details: any = {
      actualSeal:   this.selectedContainer.actual_seal,
      unloadingDate: '' ,
    }
    this.devanningApiService.saveSeal(details, this.selectedContainer).subscribe( (data:any) => {
    });
    this.dialogRef.close('ok');
  }

 



}