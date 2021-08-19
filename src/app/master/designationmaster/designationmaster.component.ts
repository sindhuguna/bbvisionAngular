import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DesignationMaster } from '../model/designationmaster';
import { DesignationmasterService } from '../service/designationmaster.service';

@Component({
  selector: 'app-designationmaster',
  templateUrl: './designationmaster.component.html',
  styleUrls: ['./designationmaster.component.css']
})
export class DesignationmasterComponent implements OnInit {

  @ViewChild('search') searchElement!: ElementRef;
  displayedColumns: string[] = ['sno', 'departmentid', 'designationname', 'status', 'tools'];
  dataSource!: MatTableDataSource<DesignationMaster>;
  designationview: DesignationMaster[] = [];
  designationedit: DesignationMaster[] = [];
  designation: DesignationMaster = new DesignationMaster();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public router: Router, public service: DesignationmasterService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.view();
  }

  view() {
    this.service.view().then(data => {
      this.designationview = data.result;
      this.dataSource = new MatTableDataSource(this.designationview);
    }, err => {
      alert(err);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  add() {
    const des: DesignationMaster = new DesignationMaster();
    this.designationedit[0] = des;
    this.router.navigateByUrl('/designationmasteradd', { state: this.designationedit });
  }

  selectedrow(row: any) {
    this.designationedit = this.designationview.filter((elem: any) => elem.id === row.id)
    this.designationedit[0].save = "update"
    this.router.navigateByUrl('/designationmasteradd', { state: this.designationedit });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
