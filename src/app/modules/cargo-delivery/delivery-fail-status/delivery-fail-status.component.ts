import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-fail-status',
  templateUrl: './delivery-fail-status.component.html',
  styleUrls: ['./delivery-fail-status.component.scss']
})
export class DeliveryFailStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ok(): void {
    window.location.reload();
  }
}
