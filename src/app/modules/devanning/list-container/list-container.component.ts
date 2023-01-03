import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ActualSealComponent } from '../actual-seal/actual-seal.component';
import { DevanningApiService } from '../service/devanning-api.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit, OnChanges {

  dataSource = new MatTableDataSource();
  dataSourceArr = [];
  isLoading = true;
  displayedColumns: string[] = ['container', 'carrier', 'eta', 'manifest'];
  @Output() selectedRow = new EventEmitter();
  @Input() search: string;
  @Input() selectedContainer: any;

  constructor(
    public dialog: MatDialog,
    public devanningApiService: DevanningApiService
  ) { 
    this.devanningApiService.getContainerDetails("").subscribe( (data:any) => {
      this.dataSource = new MatTableDataSource(data.container_list);
      this.isLoading = false;
    });
  }

  ngOnChanges(): void {
    this.dataSource.filter = this.search;
  }

  ngOnInit(): void {
    
  }

  clickedRow(row: any): void {
    const dialogRef = this.dialog.open(ActualSealComponent, {
      // height: '390px',
      width: '400px',
      data: row
    });
    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      if ( result == 'ok') {
        this.dataSource.data.forEach( (item:any) => item.isSelected = false );
        row.isSelected = true;
        this.selectedRow.emit(row);
      } 
    });
  
    
  }


}
