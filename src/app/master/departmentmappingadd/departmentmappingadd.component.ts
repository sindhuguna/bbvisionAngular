import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { Companyselect, DepartmentMapping, Departmentselect, Headselect } from '../model/departmentmapping';

@Component({
  selector: 'app-departmentmappingadd',
  templateUrl: './departmentmappingadd.component.html',
  styleUrls: ['./departmentmappingadd.component.css']
})
export class DepartmentmappingaddComponent implements OnInit {
  @ViewChild('name') someRef!: MatSelect;
  companyselectedit: Companyselect[] = [];
  companyselect: Companyselect[] = [
    { companycode: 0, companyname: 'Quadsel' },
    { companycode: 1, companyname: 'Bluebase' },
    { companycode: 2, companyname: 'Quadsel' }
  ];
  departmentselectedit: Departmentselect[] = [];
  departmentselect: Departmentselect[] = [
    { deptcode: 0, deptname: 'Marketing' },
    { deptcode: 1, deptname: 'Finance' },
    { deptcode: 2, deptname: 'Developing' }
  ];
  headselectedit: Headselect[] = [];
  headselect: Headselect[] = [
    { headcode: 0, headname: 'Saro' },
    { headcode: 1, headname: 'Suman' },
    { headcode: 2, headname: 'Shiva' }
  ];
  formgroup!: FormGroup;
  deptmapping: DepartmentMapping = new DepartmentMapping();
  company: any;
  dept: any;
  head: any;
  statuses: any;
  status: string = "InActive";
  statuscolor: string = "rgb(249 125 125)";
  save: any;
  savedata: boolean = true;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }
  sub!: any;
  ngOnInit(): void {
    debugger;
    this.sub = this.route.paramMap.subscribe(params => {
      this.company = params.get('company');
      this.dept = params.get('dept');
      this.head = params.get('head');
      this.statuses = params.get('status');
      this.save = params.get('save');
      console.log(params);
    });
    this.companyselectedit = this.companyselect.filter(
      as => as.companyname === this.company
    );
    this.departmentselectedit = this.departmentselect.filter(
      as => as.deptname === this.dept
    );
    this.headselectedit = this.headselect.filter(
      as => as.headname === this.head
    );
    this.deptmapping.companyname = this.company;
    this.deptmapping.departmentname = this.dept;
    this.deptmapping.headname = this.head;
    this.deptmapping.status = this.statuses;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    this.formgroup = this.fb.group({
      companyname: [this.deptmapping.companyname, [Validators.required]],
      departmentname: [this.deptmapping.departmentname, [Validators.required]],
      headname: [this.deptmapping.headname, [Validators.required]],
      status: [this.deptmapping.status, [Validators.required]]
    })
    if (this.companyselectedit.length > 0) {
      this.formgroup.controls.companyname.setValue(this.companyselectedit[0].companycode);
    } else {
      this.formgroup.controls.companyname.setValue(this.companyselect[0].companycode);
    }
    if (this.departmentselectedit.length > 0) {
      this.formgroup.controls.departmentname.setValue(this.departmentselectedit[0].deptcode);
    } else {
      this.formgroup.controls.departmentname.setValue(this.departmentselect[0].deptcode);
    }
    if (this.headselectedit.length > 0) {
      this.formgroup.controls.headname.setValue(this.headselectedit[0].headcode);
    } else {
      this.formgroup.controls.headname.setValue(this.headselect[0].headcode);
    }
    debugger;
    console.log(this.formgroup.value)
    this.ontoggledefault();
    setTimeout(() => {
      if (this.someRef) this.someRef.focus();
      // this.nameElement.nativeElement.focus();
    }, 0);
  }
  ontoggledefault() {
    debugger;
    if (this.formgroup.value.status === "true") {
      this.status = "Active";
      this.statuscolor = "#70ce70";
    } else if (this.formgroup.value.status === "false") {
      this.formgroup.patchValue({
        status: false
      })
      this.status = "InActive";
      this.statuscolor = "rgb(153 153 153)";
    }
  }
  onToggle(event: MatSlideToggleChange) {
    debugger;
    if (event.checked) {
      this.status = "Active";
      this.statuscolor = "#70ce70";
    } else {
      this.status = "InActive";
      this.statuscolor = "rgb(153 153 153)";
    }

  }
  saveform() {

  }

  update() {

  }

}
