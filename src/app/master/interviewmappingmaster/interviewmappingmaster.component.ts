import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InterviewmappingMaster } from '../model/interviewmappingmaster';

@Component({
  selector: 'app-interviewmappingmaster',
  templateUrl: './interviewmappingmaster.component.html',
  styleUrls: ['./interviewmappingmaster.component.css']
})
export class InterviewmappingmasterComponent implements OnInit {

  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  @ViewChild('name1') name1Element!: ElementRef;
  @ViewChild('name2') name2Element!: ElementRef;
  displayedColumns: string[] = ['dept', 'round', 'employee', 'status', 'tools'];
  dataSource!: MatTableDataSource<InterviewmappingMaster>;
  interviewmapping: InterviewmappingMaster[] = [
    { dept: 'Marketing', round: 'Assessment', employee: 'Sindhu', status: true },
    { dept: 'Finance', round: 'php technical',  employee: 'Preethi', status: false },
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.interviewmapping);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/interviewmappingmasteradd', "","","", false, "add"]);
  }

  selectedrow(row: any) {
    debugger;
    this.router.navigate(['/interviewmappingmasteradd', row.dept,row.round, row.employee,row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
