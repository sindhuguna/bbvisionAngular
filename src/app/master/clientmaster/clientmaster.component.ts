import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClientMaster } from '../model/clientmaster';

@Component({
  selector: 'app-clientmaster',
  templateUrl: './clientmaster.component.html',
  styleUrls: ['./clientmaster.component.css']
})
export class ClientmasterComponent implements OnInit {

  @ViewChild('search') searchElement!: ElementRef;
  displayedColumns: string[] = ['compname', 'clientname', 'clientorgtype', 'mobno1', 'email1', 'gstno', 'status', 'tools'];
  dataSource!: MatTableDataSource<ClientMaster>;
  company: ClientMaster[] = [
    { dept: 'Management', employee: 'Preethi', compname: 'Bluebase Software Services Private Limited', clientname: 'Girish Madhavan', clientorgtype: 'Propreitorship', mobno1: 9841016631, mobno2: 9841016631, landline: 4633220879, email1: 'girish@bluebase.in', email2: 'girish@bluebase.in', gstno: '33AAFCB5950L2ZI', website: 'www.bluebase.in', status: "Active" },
    { dept: 'Developing', employee: 'Priya', compname: '	Quadsel Systems Private Limited', clientname: 'Girish Madhavan', clientorgtype: 'Partnership', mobno1: 9841016631, mobno2: 9841016631, landline: 4633220879, email1: 'girish@bluebase.in', email2: 'girish@bluebase.in', gstno: '33AAFCB5950L2ZI', website: 'www.bluebase.in', status: "Inactive" },
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
    this.router.navigate(['/clientmasteradd', "", "", "", "", "", "", "", "", "", "", "", "", "InActive", "add"]);
  }

  selectedrow(row: any) {
    debugger;
    this.router.navigate(['/clientmasteradd', row.dept, row.employee, row.compname, row.clientname, row.clientorgtype, row.mobno1, row.mobno2, row.landline, row.email1, row.email2, row.gstno, row.website, row.status, "update"]);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
