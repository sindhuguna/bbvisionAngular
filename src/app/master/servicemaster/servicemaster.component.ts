import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceMaster } from '../model/servicemaster';


@Component({
  selector: 'app-servicemaster',
  templateUrl: './servicemaster.component.html',
  styleUrls: ['./servicemaster.component.css']
})
export class ServicemasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['name', 'status', 'tools'];
  dataSource!: MatTableDataSource<ServiceMaster>;
  service: ServiceMaster[] = [
    { name: 'IMS', status: true },
    { name: 'AMC	', status: false },
    { name: 'MPS	', status: false },
    { name: 'Migration	', status: false },
    { name: 'Others	', status: false },
   
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.service);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/servicemasteradd', "", false, "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/servicemasteradd', row.name, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
