import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.scss']
})
export class ListDeliveryComponent implements OnInit {

  @Input() bookingList: any;
  details: any;

  constructor() { }

  ngOnInit(): void {
    this.details = this.bookingList.pack_master[0];
  }

}
