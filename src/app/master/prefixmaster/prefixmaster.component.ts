import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PrefixMaster } from '../model/prefixmaster';

@Component({
  selector: 'app-prefixmaster',
  templateUrl: './prefixmaster.component.html',
  styleUrls: ['./prefixmaster.component.css']
})
export class PrefixmasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['name','name1', 'status', 'tools'];
  dataSource!: MatTableDataSource<PrefixMaster>;
  prefix: PrefixMaster[] = [
    { name: 'PrefixMaster', name1: 'BB	',status: true },
    { name: 'ConsultantStaff', name1: 'BC	',status: true },
    { name: 'Trainee', name1: 'BBT	',status: true },
   
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.prefix);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/prefixmasteradd', "", "", false, "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/prefixmasteradd', row.name, row.name1, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
