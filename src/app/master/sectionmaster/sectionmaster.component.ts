import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Sectionmaster } from '../model/sectionmaster';

@Component({
  selector: 'app-sectionmaster',
  templateUrl: './sectionmaster.component.html',
  styleUrls: ['./sectionmaster.component.css']
})
export class SectionmasterComponent implements OnInit {

  @ViewChild('search') searchElement!: ElementRef;
  displayedColumns: string[] = ['name', 'status', 'tools'];
  dataSource!: MatTableDataSource<Sectionmaster>;
  question: Sectionmaster[] = [
    { name: 'Aptitude', status: true },
    { name: 'Reasoning', status: false },
    { name: 'Technical', status: true }
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
    this.router.navigate(['/sectionmasteradd', "", "InActive", "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/sectionmasteradd', row.name, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
