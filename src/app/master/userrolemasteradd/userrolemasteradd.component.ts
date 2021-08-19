import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { UseremployeeSelected, UserroleMaster, UserroleMasterEdit } from '../model/userrolemaster';
@Component({
  selector: 'app-userrolemasteradd',
  templateUrl: './userrolemasteradd.component.html',
  styleUrls: ['./userrolemasteradd.component.css']
})
export class UserrolemasteraddComponent implements OnInit {
  formgroup!: FormGroup;
  formgroup1!: FormGroup;

  userroleadd: UserroleMaster = new UserroleMaster();
  userroleedit: UserroleMasterEdit = new UserroleMasterEdit();

  dataSource!: MatTableDataSource<UserroleMaster>;


  @ViewChild('name') searchElement!: MatSelect;
  @ViewChild('name1') searchElement1!: ElementRef;
  useremployeeselectededit: UseremployeeSelected[] = [];
  useremployeeselected: UseremployeeSelected[] = [
    { employee: 'rizwana', rolecode: 'ROLE-001--IntreViewer' },
    { employee: 'rajeswari', rolecode: 'ROLE-002--Recruiter' },
    { employee: 'gopinath', rolecode: 'ROLE-003--Admin' },
  ];

  sub: any;
  save: any;
  savedata: boolean = true;
  employee12: any;
  rolecode12: any;
  rolename12: any;
  username12: any;
  password12: any;
  statuses: any;
  status: string = "Active";
  statuscolor: any;
  rolename1: any;
  rolecode13: any;


  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    debugger;
    this.sub = this.route.paramMap.subscribe(params => {
      this.rolename12 = params.get('empname');
      this.rolecode12 = params.get('code');
      this.rolename1 = params.get('rolename');
      this.rolecode13 = params.get('rolecode')
      this.username12 = params.get('username');
      this.password12 = params.get('password');
      this.statuses = params.get('status');
      this.save = params.get('save');
      console.log(params);

    });

    if (this.save === "add") {
      this.savedata = true;
      this.userroleadd.empname = this.rolename12;
      this.userroleadd.code = this.rolecode12;
      this.userroleadd.status = this.statuses;
      debugger;
      this.formgroup = this.fb.group({
        employee: [this.userroleadd.empname, [Validators.required]],
        rolecode: [this.userroleadd.code, [Validators.required]],
        status: [this.userroleadd.status, [Validators.required]]

      });
      debugger;
      this.formgroup.controls.employee.setValue(this.useremployeeselected[0].rolecode);
      this.formgroup.controls.rolecode.setValue(this.useremployeeselected[0].employee);

      this.ontoggledefaultadd();
      setTimeout(() => {
        if (this.searchElement) this.searchElement.focus();
      }, 0);
    } else {
      this.savedata = false;
      this.userroleedit.rolename = this.rolename1;
      this.userroleedit.rolecode = this.rolecode13;
      this.userroleedit.username = this.username12;
      this.userroleedit.password = this.password12;
      this.userroleedit.status = this.statuses;
      this.formgroup1 = this.fb.group({
        rolename: [this.userroleedit.rolename, [Validators.required]],
        rolecode1: [this.userroleedit.rolecode, [Validators.required]],
        username: [this.userroleedit.username, [Validators.required]],
        password: [this.userroleedit.password, [Validators.required]],
        status: [this.userroleedit.status, [Validators.required]]

      });

      debugger;
      this.useremployeeselectededit = this.useremployeeselected.filter(
        as => as.employee === this.rolecode12
      );
      if (this.useremployeeselectededit.length > 0) {
        this.formgroup1.controls.rolecode1.setValue(this.useremployeeselectededit[0].rolecode);
      } else {
        this.formgroup1.controls.rolecode1.setValue(this.useremployeeselected[0].rolecode);
      }
      this.ontoggledefaultedit();
      setTimeout(() => {
        this.searchElement1.nativeElement.focus();
      }, 0);
    }



  }
  ontoggledefaultedit() {
    debugger;
    if (this.formgroup1.value.status === "true") {
      this.status = "Active";
      this.statuscolor = "#70ce70";
    } else if (this.formgroup1.value.status === "false") {
      this.formgroup1.patchValue({
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
  ontoggledefaultadd() {
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

  saveform() {

  }
  update() {

  }
}