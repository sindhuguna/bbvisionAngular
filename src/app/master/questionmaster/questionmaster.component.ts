import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { QuestionMaster } from '../model/questionmaster';

@Component({
  selector: 'app-questionmaster',
  templateUrl: './questionmaster.component.html',
  styleUrls: ['./questionmaster.component.css']
})
export class QuestionmasterComponent implements OnInit {

  @ViewChild('search') searchElement!: ElementRef;
  displayedColumns: string[] = ['name', 'status', 'tools'];
  dataSource!: MatTableDataSource<QuestionMaster>;
  question: QuestionMaster[] = [
    { name: 'Question-A', status: "Active" },
    { name: 'Question-B', status: "InActive" },
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public router: Router) { }

  ngOnInit(): void {
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
    this.router.navigate(['/questionmasteradd', "", "InActive", "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/questionmasteradd', row.name, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
