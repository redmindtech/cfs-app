import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-fail-status',
  templateUrl: './delivery-fail-status.component.html',
  styleUrls: ['./delivery-fail-status.component.scss']
})
export class DeliveryFailStatusComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  ok(): void {
    window.location.reload();
  }
}
