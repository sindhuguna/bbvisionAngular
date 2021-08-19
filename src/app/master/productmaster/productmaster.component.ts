import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common/common.service';
import { ProductMasterView } from '../model/productmaster';
import { ProductmasterService } from '../service/productmaster.service';
@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css']
})
export class ProductmasterComponent implements OnInit {
  @ViewChild('search') searchElement!: ElementRef;
  @ViewChild('name') nameElement!: ElementRef;
  displayedColumns: string[] = ['sno', 'name', 'status', 'tools'];
  dataSource!: MatTableDataSource<ProductMasterView>;

  productedit: ProductMasterView[] = [];
  productview: ProductMasterView[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedRowIndex: any;
  constructor(public router: Router, private service: ProductmasterService, private commonservice: CommonService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
    this.view();
  }

  view() {
    debugger;
    this.service.view().then(data => {
      debugger;
      this.productview = data.result;
      this.dataSource = new MatTableDataSource(this.productview);
    }, err => {
      this.commonservice.message("Error", err, "error");
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
    const pro: ProductMasterView = new ProductMasterView();
    this.productedit[0] = pro;
    this.router.navigateByUrl('/productmasteradd', { state: this.productedit });
  }

  selectedrow(row: any) {
    this.productedit = this.productview.filter((elem: any) => elem.id === row.id)
    this.productedit[0].save = "update"
    this.router.navigateByUrl('/productmasteradd', { state: this.productedit });
  }
}
