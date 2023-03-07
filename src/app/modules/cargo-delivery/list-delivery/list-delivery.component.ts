import { Component, Input, OnInit } from '@angular/core';
import { LoadingApiService } from '../../loading/service/loading-api.service';
import { MatDialog} from '@angular/material/dialog';
import { DeliveryFailStatusComponent } from '../delivery-fail-status/delivery-fail-status.component';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.scss']
})
export class ListDeliveryComponent implements OnInit {

  @Input() bookingList: any;
  details: any;

  
  
  constructor(  public dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.details = this.bookingList.Delivery_BL[0];
    console.log(this.bookingList?.Delivery_BL.length);
    if(this.bookingList?.Delivery_BL?.length==0){
    const dialogRef = this.dialog.open(DeliveryFailStatusComponent, {
      height: '90px',
      width: '400px',
      data:'Delivery Empty! Click to close',
      //disableClose: false
    });
    dialogRef.disableClose = true;
  }
    
    //console.log(this.details);
  }

  
  

}
