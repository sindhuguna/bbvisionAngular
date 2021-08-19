import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InterviewroundsMaster } from '../model/interviewroundsmaster';


@Component({
  selector: 'app-interviewroundsmaster',
  templateUrl: './interviewroundsmaster.component.html',
  styleUrls: ['./interviewroundsmaster.component.css']
})
export class InterviewroundsmasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['name', 'status', 'tools'];
  dataSource!: MatTableDataSource<InterviewroundsMaster>;
  interviewrounds: InterviewroundsMaster[] = [
    { name: 'Assessment', status: true },
    { name: 'PHP Technical		', status: false },
    { name: 'HOD	', status: false },
    { name: 'MD	', status: false },
    { name: 'Android Technical		', status: false },
    { name: 'Java Technical			', status: false },
    { name: 'Angular Technical			', status: false },
    { name: 'HR		', status: false },
    { name: 'tech		', status: false },
    { name: 'hod		', status: false },

  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.interviewrounds);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/interviewroundsmasteradd', "", false, "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/interviewroundsmasteradd', row.name, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
