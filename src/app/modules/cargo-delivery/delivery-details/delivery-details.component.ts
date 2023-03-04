import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingApiService } from '../../loading/service/loading-api.service';
import { CargoDeliveryService } from '../cargo-delivery.service';
import { DeliveryDetailsPopupComponent } from '../delivery-details-popup/delivery-details-popup.component';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.scss']
})
export class DeliveryDetailsComponent implements OnInit {
  isUploadClicked: boolean = false;
  @Input() bookingList: any;
  details: any;
  isSuccess: boolean = true;
  draft_no:any=null;
  bookingNo:any=null;
  

  isLoading = false;
  dataSource = [];
  displayedColumns = [ 'receivedPiece', 'damageNotes', 'actions'];
  selectedHbl:true;
  buttonDisable:boolean=true;

  constructor(
    public dialog: MatDialog,
    public DeliveryItemApiService: LoadingApiService,
    public CargoDeliveryService:CargoDeliveryService,
  ) { }

  ngOnInit(): void {
    
    this.details = this.bookingList?.Delivery_BL?.[0];
    console.log('this.bookingList');
    this.enableDeliverybutton(this.details)
    
     
  }
  enableDeliverybutton(searchitem:any){
    if(searchitem?.packages != 0){
      this.buttonDisable=false;
      //console.log(searchitem)
    }

  }

  deliveryItem(): void {
   // this.loadData();
   // this.AddDeliveryItem();
    //console.log(this.bookingList);
    this.AddDeliveryItem(this.details);

  //   if(!this.draft_no){
  //     this.isUploadClicked = true;
  //     const dialogRef = this.dialog.open(DeliveryDetailsPopupComponent, {
  //       height: '400px',
  //     width: '500px',
  //       data: { bookingList: this.bookingList, draft_no:  this.draft_no},
  //     });
  //     dialogRef.disableClose = true; 

  //   dialogRef.afterClosed().
  //   subscribe(result => { 
  //     if(result){
  //       this.loadData();
  //     }
  //   });
    
    
  //   this.isUploadClicked = false;
  // }
  }

  selectedContainer:any={
    segment_code:'05',
    container_number:'WHLU5580880',
  }
  hblDetails:any={
    hblNumber:'220112000272',
    selectedContainer:{
      job_no:'22100302504',
    }
  }

  loadData(): void {
    this.isLoading = true;
    this.DeliveryItemApiService.getUnloadDetails(this.hblDetails,this.selectedContainer).subscribe( data => {
      this.dataSource = data.items_list;
      //console.log(this.dataSource);
      this.isLoading=false;
    })}

  unloadItem(element:any){

  }
  i:any='05';
  house_no:any='220112000272';

  DeleteItem(data: any, dataSource: any, i: any,house_no: any ): void {
    let sl_no:any='16122';
    let job_no:any='22100302504';
    let segment_code:any='05';
    
    this.isLoading = true;
    this.DeliveryItemApiService.deleteItem(sl_no, job_no, segment_code,house_no).subscribe( (data) => {
      this.isLoading = false;
      console.log(data,'delete api')
      this.loadData();
    })}
  // AddDeliveryItem(){
  //     this.CargoDeliveryService.getDeliveryItem(this.bookingList.Delivery_BL[0].BL_Booking).subscribe( (data)=> {
  //           //console.log(data);
  //           this.draft_no = data.draft_cfs_no;
               
  //     })

  //   }

  AddDeliveryItem(searchItem:any){
    console.log(searchItem);
    this.CargoDeliveryService.addDelivery(searchItem).subscribe( (data)=> {
                console.log(data);
      this.draft_no=data.draft_cfs_no   
         if(this.draft_no != ''){
      const dialogRef = this.dialog.open(DeliveryDetailsPopupComponent, {
        height: '400px',
      width: '500px',
        data: { bookingList: this.bookingList, draft_no:  this.draft_no},
      });
      dialogRef.disableClose = true; 

    
  }        
    })
  }
}
