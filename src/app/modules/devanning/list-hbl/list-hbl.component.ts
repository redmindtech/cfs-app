import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DevanningApiService } from '../service/devanning-api.service';

@Component({
  selector: 'app-list-hbl',
  templateUrl: './list-hbl.component.html',
  styleUrls: ['./list-hbl.component.scss']
})
export class ListHBLComponent implements OnInit, OnChanges {

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['hblNumber', 'manifestedPieces', 'unloaded'];
  
  @Input() selectedContainer: any;
  @Input() search: string;
  @Output() selectedRow = new EventEmitter();
  isLoading = true;

  constructor(
    public devanningApiService: DevanningApiService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( this.selectedContainer && changes.selectedContainer && this.selectedContainer !== changes.selectedContainer.previousValue ) {
      this.isLoading = true;
      this.devanningApiService.getHblDetails(this.selectedContainer).subscribe( data => {
        this.isLoading = false;
        data.hbl_list.sort( (a: any, b: any) => Number(b.balance) - Number(a.balance) )
        this.dataSource = new MatTableDataSource(data.hbl_list);
        
      });
    }
    this.dataSource.filter = this.search;
  }

  clickedRow(row: any): void {
    this.dataSource.filteredData = this.dataSource.filteredData.sort((a: any, b:any) => a.balance-b.balance);
    this.dataSource.data.forEach( (item: any) => item.isSelected = false );
    row.isSelected = true;
    row.selectedContainer = this.selectedContainer;
    this.selectedRow.emit(row);
  }

}
