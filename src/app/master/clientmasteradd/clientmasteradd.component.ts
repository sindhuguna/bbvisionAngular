import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { ClientMaster, ClientOrgNameSelect } from '../model/clientmaster';
import { Departmentselect } from '../model/departmentmapping';
import { EmployeeSelect } from '../model/employee';
@Component({
  selector: 'app-clientmasteradd',
  templateUrl: './clientmasteradd.component.html',
  styleUrls: ['./clientmasteradd.component.css']
})
export class ClientmasteraddComponent implements OnInit {
  @ViewChild('dept') someRef!: MatSelect;

  formgroup!: FormGroup;
  client: ClientMaster = new ClientMaster();
  dept: any;
  emp: any;
  compname: any;
  clientname: any;
  clientorgname: any;
  mobno1: any;
  mobno2: any;
  landlineno: any;
  email1: any;
  email2: any;
  gstno: any;
  website: any;
  @ViewChild('name') nameElement!: ElementRef;
  puraddress: boolean = false;
  finaddress: boolean = false;
  save: any;
  savedata: boolean = true;
  departmentselectedit: Departmentselect[] = [];
  departmentselect: Departmentselect[] = [
    { deptcode: 0, deptname: 'Marketing' },
    { deptcode: 1, deptname: 'Finance' },
    { deptcode: 2, deptname: 'Developing' }
  ];
  employeeselectedit: EmployeeSelect[] = [];
  employeeselect: EmployeeSelect[] = [
    { empcode: "BB0001", empname: 'Preethi' },
    { empcode: "BB0002", empname: 'Priya' },
    { empcode: "BB0003", empname: 'Aaththi' }
  ];
  clientorgtypeelectedit: ClientOrgNameSelect[] = [];
  clientorgtypeelect: ClientOrgNameSelect[] = [
    { orgcode: "0", orgname: 'Propreitorship' },
    { orgcode: "1", orgname: 'Government' },
    { orgcode: "2", orgname: 'Partnership' }
  ];
  states = [
    { name: "Alabama", abbreviation: "AL" },
    { name: "Alaska", abbreviation: "AK" },
    { name: "American Samoa", abbreviation: "AS" },
    { name: "Arizona", abbreviation: "AZ" },
    { name: "Arkansas", abbreviation: "AR" },
    { name: "California", abbreviation: "CA" },
    { name: "Colorado", abbreviation: "CO" },
    { name: "Connecticut", abbreviation: "CT" },
    { name: "Delaware", abbreviation: "DE" },
    { name: "District Of Columbia", abbreviation: "DC" },
    { name: "Federated States Of Micronesia", abbreviation: "FM" },
    { name: "Florida", abbreviation: "FL" },
    { name: "Georgia", abbreviation: "GA" },
    { name: "Guam", abbreviation: "GU" },
    { name: "Hawaii", abbreviation: "HI" },
    { name: "Idaho", abbreviation: "ID" },
    { name: "Illinois", abbreviation: "IL" },
    { name: "Indiana", abbreviation: "IN" },
    { name: "Iowa", abbreviation: "IA" },
    { name: "Kansas", abbreviation: "KS" },
    { name: "Kentucky", abbreviation: "KY" },
    { name: "Louisiana", abbreviation: "LA" },
    { name: "Maine", abbreviation: "ME" },
    { name: "Marshall Islands", abbreviation: "MH" },
    { name: "Maryland", abbreviation: "MD" },
    { name: "Massachusetts", abbreviation: "MA" },
    { name: "Michigan", abbreviation: "MI" },
    { name: "Minnesota", abbreviation: "MN" },
    { name: "Mississippi", abbreviation: "MS" },
    { name: "Missouri", abbreviation: "MO" },
    { name: "Montana", abbreviation: "MT" },
    { name: "Nebraska", abbreviation: "NE" },
    { name: "Nevada", abbreviation: "NV" },
    { name: "New Hampshire", abbreviation: "NH" },
    { name: "New Jersey", abbreviation: "NJ" },
    { name: "New Mexico", abbreviation: "NM" },
    { name: "New York", abbreviation: "NY" },
    { name: "North Carolina", abbreviation: "NC" },
    { name: "North Dakota", abbreviation: "ND" },
    { name: "Northern Mariana Islands", abbreviation: "MP" },
    { name: "Ohio", abbreviation: "OH" },
    { name: "Oklahoma", abbreviation: "OK" },
    { name: "Oregon", abbreviation: "OR" },
    { name: "Palau", abbreviation: "PW" },
    { name: "Pennsylvania", abbreviation: "PA" },
    { name: "Puerto Rico", abbreviation: "PR" },
    { name: "Rhode Island", abbreviation: "RI" },
    { name: "South Carolina", abbreviation: "SC" },
    { name: "South Dakota", abbreviation: "SD" },
    { name: "Tennessee", abbreviation: "TN" },
    { name: "Texas", abbreviation: "TX" },
    { name: "Utah", abbreviation: "UT" },
    { name: "Vermont", abbreviation: "VT" },
    { name: "Virgin Islands", abbreviation: "VI" },
    { name: "Virginia", abbreviation: "VA" },
    { name: "Washington", abbreviation: "WA" },
    { name: "West Virginia", abbreviation: "WV" },
    { name: "Wisconsin", abbreviation: "WI" },
    { name: "Wyoming", abbreviation: "WY" }
  ];
  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }
  sub!: any;
  ngOnInit(): void {
    debugger;
    this.sub = this.route.paramMap.subscribe(params => {
      this.dept = params.get('dept');
      this.emp = params.get('employee');
      this.compname = params.get('compname');
      this.clientname = params.get('clientname');
      this.clientorgname = params.get('clientorgname');
      this.mobno1 = params.get('mobno1');
      this.mobno2 = params.get('mobno2');
      this.landlineno = params.get('landlineno');
      this.email1 = params.get('email1');
      this.email2 = params.get('email2');
      this.gstno = params.get('gstno');
      this.website = params.get('website');
      this.save = params.get('save');
      console.log(params);
    });
    debugger;
    this.client.dept = this.dept;
    this.client.employee = this.emp;
    this.client.compname = this.compname;
    this.client.clientname = this.clientname;
    this.client.clientorgtype = this.clientorgname;
    this.client.mobno1 = this.mobno1;
    this.client.mobno2 = this.mobno2;
    this.client.landline = this.landlineno;
    this.client.email1 = this.email1;
    this.client.email2 = this.email2;
    this.client.gstno = this.gstno;
    this.client.website = this.website;

    if (this.save === "add") {
      this.savedata = true;
    } else {
      this.savedata = false;
    }
    this.formgroup = this.fb.group({
      departmentname: [this.client.dept, [Validators.required]],
      employee: [this.client.employee, [Validators.required]],
      compname: [this.client.compname, [Validators.required]],
      clientname: [this.client.clientname, [Validators.required]],
      clientorgtype: [this.client.clientorgtype, [Validators.required]],
      mobno1: [this.client.mobno1, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      mobno2: [this.client.mobno2, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      landline: [this.client.landline, [Validators.pattern("[0-9 ]{12}")]],
      email1: [this.client.email1, [Validators.required]],
      email2: [this.client.email2],
      gstno: [this.client.gstno, [Validators.required]],
      website: [this.client.website],
      status: [this.client.status, [Validators.required]],
      addressform: new FormGroup({
        address: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        postalCode: new FormControl('')
      }),
      purchase: new FormGroup({
        name: new FormControl(''),
        designation: new FormControl(''),
        contact: new FormControl(''),
        mailid: new FormControl(''),
        purbranch: new FormControl(''),
        purchaseaddress: new FormGroup({
          address: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl(''),
          postalCode: new FormControl('')
        })
      }),
      finance: new FormGroup({
        name: new FormControl(''),
        designation: new FormControl(''),
        contact: new FormControl(''),
        mailid: new FormControl(''),
        finbranch: new FormControl(''),
        financeaddress: new FormGroup({
          address: new FormControl(''),
          city: new FormControl(''),
          state: new FormControl(''),
          postalCode: new FormControl('')
        })
      })
    })
    this.departmentselectedit = this.departmentselect.filter(
      as => as.deptname === this.dept
    );
    if (this.departmentselectedit.length > 0) {
      this.formgroup.controls.departmentname.setValue(this.departmentselectedit[0].deptcode);
    } else {
      this.formgroup.controls.departmentname.setValue(this.departmentselect[0].deptcode);
    }
    this.employeeselectedit = this.employeeselect.filter(
      as => as.empname === this.emp
    );
    if (this.employeeselectedit.length > 0) {
      this.formgroup.controls.employee.setValue(this.employeeselectedit[0].empcode);
    } else {
      this.formgroup.controls.employee.setValue(this.employeeselect[0].empcode);
    }

    this.clientorgtypeelectedit = this.clientorgtypeelect.filter(
      as => as.orgname === this.clientorgname
    );
    if (this.clientorgtypeelectedit.length > 0) {
      this.formgroup.controls.clientorgtype.setValue(this.clientorgtypeelectedit[0].orgcode);
    } else {
      this.formgroup.controls.clientorgtype.setValue(this.clientorgtypeelect[0].orgcode);
    }
    setTimeout(() => {
      if (this.someRef) this.someRef.focus();
    }, 0);
  }

  onTogglepurchase(event: MatSlideToggleChange) {
    debugger;
    if (event.checked) {
      this.puraddress = true;
    } else {
      this.puraddress = false;
    }

  }
  onTogglefinance(event: MatSlideToggleChange) {
    debugger;
    if (event.checked) {
      this.finaddress = true;
    } else {
      this.finaddress = false;
    }

  }
  saveform() {

  }

  update() {

  }
}
