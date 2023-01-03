import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-unload-item-details-popup',
  templateUrl: './unload-item-details-popup.component.html',
  styleUrls: ['./unload-item-details-popup.component.scss']
})
export class UnloadItemDetailsPopupComponent implements OnInit {

  details: any;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(): void {
    this.details = this.data;
  }

}
