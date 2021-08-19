import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ResourceMaster } from '../model/resourcemaster';


@Component({
  selector: 'app-resourcemaster',
  templateUrl: './resourcemaster.component.html',
  styleUrls: ['./resourcemaster.component.css']
})
export class ResourcemasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['name', 'status', 'tools'];
  dataSource!: MatTableDataSource<ResourceMaster>;
  resource: ResourceMaster[] = [
    { name: 'Nakuri', status: true },
    { name: 'Consultant', status: false },
    { name: 'Walk in	', status: false },

    { name: 'Facebook', status: false },

    { name: 'Indeed', status: false },
    { name: 'Linkedin', status: false },
    { name: 'Website', status: false },
    { name: 'Referal	', status: false },


  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.resource);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/resourcemasteradd', "", false, "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/resourcemasteradd', row.name, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
