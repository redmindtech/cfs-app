import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  label: any;
  fscNumber: any;
  numberOfPakages: any;
  hbl: any;
  eta: any;
  pod: any;
  selectedContainer: any;
  container_number: any;
  jobNo: any;
  selectedHbl: any;
  subjob_no: any;
  segment_code: any;
  unload: any;
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PreviewComponent>,
  ) { }

  ngOnInit(): void {
    let today: any = moment().format('DD-MMM-YYYY').split(':');
      today = today[0];
      this.eta = today;
  }

}
