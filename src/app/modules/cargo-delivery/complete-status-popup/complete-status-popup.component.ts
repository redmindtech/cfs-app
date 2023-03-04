import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-status-popup',
  templateUrl: './complete-status-popup.component.html',
  styleUrls: ['./complete-status-popup.component.scss']
})
export class CompleteStatusPopupComponent implements OnInit {

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
