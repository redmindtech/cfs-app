import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-popup',
  templateUrl: './status-popup.component.html',
  styleUrls: ['./status-popup.component.scss']
})
export class StatusPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deliveryTallySheet():void {
    
  }

  deliveryNote():void {
    
  }
   
  close(): void {
    window.location.reload();

  }
}
