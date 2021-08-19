import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { Departmentselect } from '../model/departmentmapping';
import { DivisionMaster } from '../model/divisionmaster';

@Component({
  selector: 'app-divisionmasteradd',
  templateUrl: './divisionmasteradd.component.html',
  styleUrls: ['./divisionmasteradd.component.css']
})
export class DivisionmasteraddComponent implements OnInit {
  formgroup!: FormGroup;
  @ViewChild('name') nameElement!: ElementRef;
  status: string = "InActive";
  statuscolor: string = "rgb(249 125 125)";
  departmentselectedit: Departmentselect[] = []
  departmentselect: Departmentselect[] = [
    { deptcode: 0, deptname: 'Marketing' },
    { deptcode: 1, deptname: 'Finance' },
    { deptcode: 2, deptname: 'Developing' }
  ];
  department: any;
  div: any;
  statuses: any;
  save: any;
  savedata: boolean = true;
  division: DivisionMaster = new DivisionMaster();
  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }
  sub!: any;

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.department = params.get('dept');
      this.div = params.get('div');
      this.statuses = params.get('status');
      this.save = params.get('save');
    });
    this.departmentselectedit = this.departmentselect.filter(
      as => as.deptname === this.department
    );
    this.division.dept = this.department;
    this.division.div = this.div;
    this.division.status = this.statuses;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    this.formgroup = this.fb.group({
      div: [this.division.div, [Validators.required]],
      dept: [this.division.dept, [Validators.required]],
      status: [this.division.status, [Validators.required]]
    })
    if (this.departmentselectedit.length > 0) {
      this.formgroup.controls.dept.setValue(this.departmentselectedit[0].deptcode);
    } else {
      this.formgroup.controls.dept.setValue(this.departmentselect[0].deptcode);
    }
    this.ontoggledefault();
    setTimeout(() => {
      this.nameElement.nativeElement.focus();
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
