import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SimMaster } from '../model/simmaster';

@Component({
  selector: 'app-simmaster',
  templateUrl: './simmaster.component.html',
  styleUrls: ['./simmaster.component.css']
})
export class SimmasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['name','name1','name2', 'status', 'tools'];
  dataSource!: MatTableDataSource<SimMaster>;
  sim: SimMaster[] = [
    { name: 'Airtel', name1: '9876543218', name2: '2021-07-21	', status: true },
    { name: 'Vodafone', name1: '9876543219', name2: '2021-08-21	', status: true },
   
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.sim);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/simmasteradd', "", "","", false, "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/simmasteradd', row.name, row.name1, row.name2, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
