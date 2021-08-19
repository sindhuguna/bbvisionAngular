import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FeedbackMaster } from '../model/feedbackmaster';

@Component({
  selector: 'app-feedbackmaster',
  templateUrl: './feedbackmaster.component.html',
  styleUrls: ['./feedbackmaster.component.css']
})
export class FeedbackmasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['name', 'status', 'tools'];
  dataSource!: MatTableDataSource<FeedbackMaster>;
  feedback: FeedbackMaster[] = [
    { name: 'Not Selected', status: true },
    { name: 'Schedule Interview	', status: false },
    { name: 'Profile On Hold		', status: false },

  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.feedback);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/feedbackmasteradd', "", false, "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/feedbackmasteradd', row.name, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
