import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingApiService } from '../../service/loading-api.service';
import { UploadPhotoPopupComponent } from '../../upload-photo-popup/upload-photo-popup.component';


interface Type{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-new-hbl-item-loading',
  templateUrl: './add-new-hbl-item.component.html',
  styleUrls: ['./add-new-hbl-item.component.scss']
})
export class AddNewHblItemComponent implements OnInit {

  receivedPiece: any;
  receivedWeight: any;
  receivedVolume: any;
  damageNotes: any;
  length: any;
  width: any;
  height: any;
  cbm: any = 0;
  weight: any;
  damage = new FormControl();
  panelOpenState = false;
  isLoading = false;
  containerNo: any;
  jobNo: any;
  hblNumber: any;
  packageType: any;
  damageType: any;
  types: any;
  damageTypes: any;
  landedMarks: any;
  cfsNote: any;
  isUploadClicked: boolean = false;
  subJobNo: any;
  tableRowObject: any;
  selectedContainer: any;
  selectedHbl: any;
  
  constructor(
    public dialogRef: MatDialogRef<AddNewHblItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public devanningApiService: LoadingApiService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.devanningApiService.packType().subscribe( (data:any) => {
      this.isLoading = false;
      this.types = data.pack_master.map( (item: any) => {
        return { value: item.port_code, viewValue: item.port_name }
      });
       this.packageType = this.selectedHbl.pack_code;
      // this.packageType = this.tableRowObject.package_type;
    });
    this.isLoading = true;
    this.devanningApiService.damageType().subscribe( (data:any) => {
      this.isLoading = false;
      this.damageTypes = data.pack_master.map( (item: any) => {
        return { value: item.port_code, viewValue: item.port_name }
      });
      // this.damageType = this.tableRowObject.damage_type;
    });
    // this.receivedPiece = this.tableRowObject.rcvd_qty;
    // this.damage.setValue(this.tableRowObject.good_damage);
    // this.damageNotes = this.tableRowObject.damage_notes;
    // this.cbm = this.tableRowObject.volume;
    // this.weight = this.tableRowObject.weight;
  }

  weightFun(e: any): void {
    let num = e.split(".")[1];
    if(num.length >= 4) {
      this.weight = Number(e).toFixed(3);
    }
  }

  save(): void {
    if(!this.isUploadClicked){
      this.isUploadClicked = true;
    let details: any = {
      receivedPiece: this.receivedPiece ? this.receivedPiece : '',
      receivedWeight: this.receivedWeight ? this.receivedWeight : '',
      receivedVolume: this.receivedVolume ? this.receivedVolume : '',
      damageCondition: this.damage.value ? this.damage.value : '',
      damageType: this.damageType ? this.damageType : '',
      damageNotes: this.damageNotes ? this.damageNotes : '',
      landedMarks: this.landedMarks ? this.landedMarks: '',
      cfsNote: this.cfsNote ? this.cfsNote: '',
      length: this.length ? this.length : '',
      width: this.width ? this.width : '',
      height: this.height ? this.height : '',
      cbm: this.cbm ? this.cbm : '',
      weight: this.weight ? this.weight : '',
      unloadTime: this.formatDate( (new Date()).getTime() ),
      containerNo: this.containerNo ? this.containerNo : '',
      jobNo: this.jobNo ? this.jobNo : '',
      hblNumber:this.hblNumber ? this.hblNumber : '',
      packageType:this.packageType ? this.packageType : '',
      subJobNo: this.subJobNo ? this.subJobNo : '',

    }
    this.isLoading = true;
    this.devanningApiService.getSaveItem(details, this.selectedContainer).subscribe( (data:any) => {
      this.isLoading = false;
    });
    this.dialogRef.close();
    this.isUploadClicked = false;

    }
  }

  formatDate(inp: number) {
    let inDate = new Date(inp);
    let options: any = {  
        weekday: "long", year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit"  
    };  
    return inDate.toLocaleTimeString("en-us", options);
}

  calculateCBM(): void {
    let value = ( (this.length * this.width * this.height) / 1000000) * this.receivedPiece;
    this.cbm  = isNaN(value) ? '' : Number(value).toFixed(3)
  }

  // uploadPhoto(): void {
  //   const uploadPopupRef = this.dialog.open(UploadPhotoPopupComponent, {
  //     width: '80%',
  //     height: '90%',
  //     data: { jobNo: this.jobNo, }
  //   });
  //   uploadPopupRef.componentInstance.job_no = this.jobNo;
  //   uploadPopupRef.componentInstance.house_no = this.hblNumber;
  //   uploadPopupRef.componentInstance.segment_code = this.selectedContainer.segment_code;
  //   uploadPopupRef.componentInstance.source = 'H';
  //   uploadPopupRef.componentInstance.selectedContainer = this.selectedContainer;
  //   uploadPopupRef.componentInstance.selectedHbl = this.selectedHbl;
  //   uploadPopupRef.componentInstance.subjob_no = this.selectedHbl.subjob_no;
    
  //   uploadPopupRef.afterClosed().subscribe( (result: any) => {
  //   });
  // }

}
