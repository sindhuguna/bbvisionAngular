import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { JobDescription } from '../model/jobdescription';

@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.css']
})
export class JobdescriptionComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['name', 'status', 'tools'];
  dataSource!: MatTableDataSource<JobDescription>;
  desc: JobDescription[] = [
    { title: 'Senior Angular Developer', status: true },
    { title: 'Trainee', status: false },
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public router: Router) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.desc);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/jobdescriptionadd', "", false, "add"]);
  }

  edittable(row: any) {
    this.router.navigate(['/jobdescriptionadd', row.title, row.status, "update"]);
  }


}
