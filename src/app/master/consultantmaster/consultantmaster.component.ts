import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConsultantMaster } from '../model/consultant';

@Component({
  selector: 'app-consultantmaster',
  templateUrl: './consultantmaster.component.html',
  styleUrls: ['./consultantmaster.component.css']
})
export class ConsultantmasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['name', 'organization', 'phoneno', 'email', 'empname', 'status', 'tools'];
  dataSource!: MatTableDataSource<ConsultantMaster>;
  consultant: ConsultantMaster[] = [
    { name: 'rajeshwari', organization: 'bluebase', phoneno: '6780912345', email: 'gnth@gmail.com',phoneno1: '6780912345', email1: 'gnth@gmail.com', empname: '89', status: true },
    { name: 'Girish', organization: 'Quadsel', phoneno: '9990008889', email: '	girish@gmail.com',phoneno1: '6780912345', email1: 'gnth@gmail.com', empname: '34', status: true },
    { name: 'Gopinath', organization: 'Feat Business Solution', phoneno: '	9998887771', email: '	prince@gmail.com',phoneno1: '6780912345', email1: 'gnth@gmail.com', empname: '07', status: false },
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public route: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.consultant);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  add() {
    debugger;
    this.route.navigate(['/consultantmasteradd', "", "", "", "", "", "","", false, "add"]);
  }
  selectedrow(row: any) {
    debugger;
    this.route.navigate(['/consultantmasteradd',row.name, row.organization, row.phoneno, row.email,row.phoneno1, row.email1,
      row.empname, row.status, "update"]);
    console.log(row);
  }


}
