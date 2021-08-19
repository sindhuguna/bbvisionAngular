import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Companyselect, DepartmentMapping, Departmentselect, Headselect } from '../model/departmentmapping';
@Component({
  selector: 'app-departmentmapping',
  templateUrl: './departmentmapping.component.html',
  styleUrls: ['./departmentmapping.component.css']
})
export class DepartmentmappingComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  displayedColumns: string[] = ['companyname', 'departmentname', 'headname', 'status', 'tools'];
  dataSource!: MatTableDataSource<DepartmentMapping>;
  department: DepartmentMapping[] = [
    { companyname: 'BlueBase', departmentname: 'Designing', headname: 'Priya', status: true },
    { companyname: 'Quadsel', departmentname: 'Development', headname: 'Preethi', status: false },
    { companyname: 'BlueBase', departmentname: 'Finance', headname: 'Aathi', status: true }
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  status: string = "InActive";
  statuscolor: string = "rgb(249 125 125)";
  companyselect: Companyselect[] = [
    { companycode: 0, companyname: 'Quadsel' },
    { companycode: 1, companyname: 'Bluebase' },
    { companycode: 2, companyname: 'Quadsel' }
  ];
  departmentselect: Departmentselect[] = [
    { deptcode: 0, deptname: 'Marketing' },
    { deptcode: 1, deptname: 'Finance' },
    { deptcode: 2, deptname: 'Developing' }
  ];
  headselect: Headselect[] = [
    { headcode: 0, headname: 'Saro' },
    { headcode: 1, headname: 'Suman' },
    { headcode: 2, headname: 'Shiva' }
  ];
  constructor(public router: Router) {
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.department);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    this.router.navigate(['/departmentmappingadd', "", "", "", false, "add"]);
  }

  selectedrow(row: any) {
    this.router.navigate(['/departmentmappingadd', row.companyname, row.departmentname, row.headname, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
