import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadingApiService } from '../../loading/service/loading-api.service';
import { CargoDeliveryService } from '../cargo-delivery.service';
import { CompleteStatusPopupComponent } from '../complete-status-popup/complete-status-popup.component';
import { SaveFailStatusComponent } from '../save-fail-status/save-fail-status.component';
import { StatusPopupComponent } from '../status-popup/status-popup.component';
import { UploadPhotoPopupComponent } from '../upload-photo-popup/upload-photo-popup.component';

@Component({
  selector: 'app-delivery-details-popup',
  templateUrl: './delivery-details-popup.component.html',
  styleUrls: ['./delivery-details-popup.component.scss']
})
export class DeliveryDetailsPopupComponent implements OnInit {
  details: any;
  bookingList: any;
  types: any;
  packageType: any;
  truckName: any;
  driverName: any;
  Volumn: any;
  Weight: any;
  saveItems: any;
  isLoading = false;
  DeliveredPiece:number;
  draft_no:any=null;
  bookingNo:any=null;
  totalpackage:number;
  
  

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cargoDeliveryService: CargoDeliveryService,
    public DeliveryItemApiService: LoadingApiService

  ) { }

  ngOnInit(): void {
    this.details = this.data.bookingList.Delivery_BL[0];
    console.log(this.details);
    this.totalpackage=this.details.packages;
    //this.bookingNo=this.data.booking_no;
    this.draft_no=this.data.draft_no;
    console.log(this.draft_no);
    // this.cargoDeliveryService.packType().subscribe( (data:any) => {
    //   this.types = data.pack_master.map( (item: any) => {
    //     return { value: item.port_code, viewValue: item.port_name }
    //   });
    // });

    
  }
  //clears delivered quantity data
  x:number=0;
  Resetquantity(){
    this.x=this.x+this.DeliveredPiece;
    console.log(this.x);
    this.DeliveredPiece=0;
  }


  uploadPhoto(): void {
    const uploadPopupRef = this.dialog.open(UploadPhotoPopupComponent, {
      width: '80%',
      height: '90%',
      data: { }
    });
    // uploadPopupRef.componentInstance.source = 'B';
    // uploadPopupRef.componentInstance.selectedBookingNumber = this.selectedBookingNumber;
    // uploadPopupRef.componentInstance.draftCfsNo = this.draft_cfs_no;
    
    uploadPopupRef.afterClosed().subscribe( (result: any) => {
    });
  }
  


  // receivedPiece: any;
  receivedWeight: any;
  receivedVolume: any;
  damage: any;
  damageType: any;
  damageNotes: any;
  landedMarks: any;
  cfsNote: any;
  length: any;
  width: any;
  height: any;
  cbm: any='';
  weight: any;
  containerNo: any;
  jobNo: any;
  hblNumber: any;
  subJobNo: any;
  
  selectedContainer:any={
    segment_code:'05',
    container_number:'WHLU5580880',
  }

  

//old
  // save(): void {
  //   this.quantity();
  //   console.log(this.DeliveredPiece)
  //   if(this.DeliveredPiece){
  //   let details: any = {
  //     receivedPiece: this.DeliveredPiece ? this.DeliveredPiece : '',
  //     receivedWeight: this.receivedWeight ? this.receivedWeight : '',
  //     receivedVolume: this.receivedVolume ? this.receivedVolume : '',
  //     damageCondition: '',
  //     damageType: this.damageType ? this.damageType : '',
  //     damageNotes: this.damageNotes ? this.damageNotes : '',
  //     landedMarks: this.landedMarks ? this.landedMarks: '',
  //     cfsNote: this.cfsNote ? this.cfsNote: '',
  //     length: this.length ? this.length : '',
  //     width: this.width ? this.width : '',
  //     height: this.height ? this.height : '',
  //     cbm: this.cbm ? this.cbm : '',
  //     weight: this.weight ? this.weight : '',
  //     unloadTime: this.formatDate( (new Date()).getTime() ),
  //     containerNo: 'WHLU5580880',
  //     jobNo: '22100302504',
  //     hblNumber:'220112000272',
  //     packageType:'',
  //     subJobNo: this.subJobNo ? this.subJobNo : '',

  //   }
    
  //   this.DeliveryItemApiService.getSaveItem(details, this.selectedContainer).subscribe( (data:any) => {
  //     this.isLoading = false;
  //     console.log(this.bookingList);
      
      
  //   });
    
  //   this.cargoDeliveryService.SaveDeliveryItem(this.bookingNo,this.draft_no,this.DeliveredPiece).subscribe(data =>{
  //     console.log(data)
  //   })

  //   }
    

  //   // let saveItems: any = {
  //   //   packages: this.details.packages ? this.details.packages : '',
  //   //   pack_type: this.details.pack_type ? this.details.pack_type : '',
  //   //   truckName: this.truckName ? this.truckName : '',
  //   //   driverName: this.driverName ? this.driverName : '',
  //   //   volume: this.details.volume ? this.details.volume : '',
  //   //   weight: this.details.weight ? this.details.weight : '',
      
  //   // }
  //   // this.cargoDeliveryService.saveDeliveryDetails(saveItems).subscribe( (data:any) => {
  //   //   const uploadPopupRef = this.dialog.open(StatusPopupComponent, {
  //   //     width: '400px',
  //   //     data: { }
  //   //   });
  //   // }, err => {
  //   //   const uploadPopupRef = this.dialog.open(SaveFailStatusComponent, {
  //   //     width: '400px',
  //   //     data: { }
  //   //   });
  //   // });

  //   // const uploadPopupRef = this.dialog.open(StatusPopupComponent, {
  //   //   width: '400px',
  //   //   data: { }
  //   // });
  //   // uploadPopupRef.afterClosed().subscribe( (result: any) => {
  //   // });

  // }
  save(){
    this.cargoDeliveryService.addDeliveryQty(this.details,this.DeliveredPiece,this.draft_no).subscribe( (data)=> {
              //console.log(data);
              this.Resetquantity();
     })
      
  }

  deliveryComplete(){
    this.cargoDeliveryService.DeliveryItemComplete(this.draft_no).subscribe( (data)=> {
      console.log(data);
      

  })
  const dialogRef = this.dialog.open(CompleteStatusPopupComponent, {
        height: '400px',
      width: '500px',
        data: { bookingList: this.bookingList, draft_no:  this.draft_no},
      });
      dialogRef.disableClose = true; 
  }
  

  formatDate(inp: number) {
    let inDate = new Date(inp);
    let options: any = {  
        weekday: "long", year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit"  
    };  
    return inDate.toLocaleTimeString("en-us", options);
}
  
  calculateCBM(){
    
  }
}
