import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { PreviewComponent } from '../preview/preview.component';
import { DevanningApiService } from '../service/devanning-api.service';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  numberOfLabels: any;
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
    public dialogRef: MatDialogRef<LabelComponent>,
    public devanningApiService: DevanningApiService


  ) { }

  ngOnInit(): void {
    let today: any = moment().format('DD-MMM-YYYY').split(':');
      today = today[0];
      this.eta = today;
  }

  print(): void {
    
    let details: any = {
      fscNumber: this.selectedContainer.fse_number,
      hbl: this.selectedHbl.hblNumber,
      eta: this.eta,
      pod: this.selectedContainer.pod_text,
      unload: this.unload,
      numberOfPakages: this.numberOfPakages ? this.numberOfPakages : '',

    }
    window.open(`https://www.efreightsuite.com/CR_Reports/CR_Exp_Cargo_CFS_Label.aspx?HBL=${this.selectedHbl.hblNumber}&Booking_No=${this.selectedContainer.fse_number}&POD=${this.selectedContainer.pod_text}&ETA=${this.eta}&No_of_pkg=${this.numberOfPakages}&No_Of_Copy=${this.unload}&SAAS_ID=LIVEFSL`,"_blank")
    // this.devanningApiService.labelPrint(details, this.selectedContainer, this.selectedHbl).subscribe( (data:any) => {
    // });
    this.dialogRef.close();
    

  }

  preview(): void {
    const dialogRef = this.dialog.open(PreviewComponent, {
      width: '400px',
      // height: '90%',
      data: { jobNo: this.jobNo, unload: this.unload, label: this.numberOfPakages}
    });
    dialogRef.disableClose = true;
    dialogRef.componentInstance.selectedContainer = this.selectedContainer;
    dialogRef.componentInstance.container_number = this.selectedContainer.container_number;
    dialogRef.componentInstance.jobNo = this.selectedContainer.job_no;
    dialogRef.componentInstance.selectedHbl = this.selectedHbl; 
    dialogRef.componentInstance.subjob_no = this.selectedHbl.subjob_no;
    dialogRef.componentInstance.segment_code = this.selectedContainer.segment_code;
  }
}
