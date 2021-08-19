import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DivisionMaster } from '../model/divisionmaster';

@Component({
  selector: 'app-divisionmaster',
  templateUrl: './divisionmaster.component.html',
  styleUrls: ['./divisionmaster.component.css']
})
export class DivisionmasterComponent implements OnInit {

  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['dept', 'div', 'status', 'tools'];
  dataSource!: MatTableDataSource<DivisionMaster>;
  question: DivisionMaster[] = [
    { dept: 'Development', div: "Software", status: true },
    { dept: 'Designing', div: "UI/UX", status: false },
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
    this.dataSource = new MatTableDataSource(this.question);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/divisionmasteradd', "", "", false, "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/divisionmasteradd', row.dept, row.div, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
