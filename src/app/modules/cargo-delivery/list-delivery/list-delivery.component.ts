import { Component, Input, OnInit } from '@angular/core';
import { LoadingApiService } from '../../loading/service/loading-api.service';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.scss']
})
export class ListDeliveryComponent implements OnInit {

  @Input() bookingList: any;
  details: any;

  
  
  constructor(  ) { }

  ngOnInit(): void {
    this.details = this.bookingList.Delivery_BL[0];
    
    
    //console.log(this.details);
  }

  
  

}
