import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CallsMaster } from '../model/callsmaster';

@Component({
  selector: 'app-callsmaster',
  templateUrl: './callsmaster.component.html',
  styleUrls: ['./callsmaster.component.css']
})
export class CallsmasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['name', 'status', 'tools'];
  dataSource!: MatTableDataSource<CallsMaster>;
  company: CallsMaster[] = [
    { name: 'Incomming', status: "Active" },
    { name: 'Outgoing', status: "Inactive" },
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.company);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/callsmasteradd', "", "InActive", "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/callsmasteradd', row.name, row.status, "update"]);
  }


}
