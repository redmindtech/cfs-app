import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-complete-status-popup',
  templateUrl: './complete-status-popup.component.html',
  styleUrls: ['./complete-status-popup.component.scss']
})
export class CompleteStatusPopupComponent implements OnInit {
  

  constructor(@Inject(MAT_DIALOG_DATA) public deliveryCompleteMessage: any) { }

  ngOnInit(): void {
    console.log(this.deliveryCompleteMessage);

  }

  
  close(): void {
    window.location.reload();

  }

}
