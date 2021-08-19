import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserroleMaster } from '../model/userrolemaster';

@Component({
  selector: 'app-userrolemaster',
  templateUrl: './userrolemaster.component.html',
  styleUrls: ['./userrolemaster.component.css']
})
export class UserrolemasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') someRef!: MatSelect;
  displayedColumns: string[] = ['code', 'rolename', 'empname', 'status', 'tools'];
  dataSource!: MatTableDataSource<UserroleMaster>;
 
  userrole: UserroleMaster[] = [
    { code: 'R003', rolename: 'HR - Recruiter', empname: 'gopinath',rolecode:'ROO3-HR-Recruiter',username:'12345679455',password:'133',status: true },
    { code: 'R019', rolename: 'Service Head', empname: 'rajeswari',rolecode:'ROO3-HR-Recruiter',username:'12345679455',password:'133',status: true },
    { code: 'R007', rolename: 'Junior Developer', empname: 'rizwana',rolecode:'ROO3-HR-Recruiter',username:'12345679455',password:'133',status: false },
  ];
 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  view: boolean = true;
  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.dataSource = new MatTableDataSource(this.userrole);
    // this.dataSource1= new MatTableDataSource(this.userrole1); 
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
  add() {

    this.router.navigate(['/userrolemasteradd', '', '', '', '', '', '', false, "add"]);
  }
  EditMethod(row: any) {
    debugger
    //   console.log(row)
    this.router.navigate(['/userrolemasteradd', row.empname, row.code, row.rolename, row.rolecode, row.username, row.password, row.status, "update"]);
  }



}
