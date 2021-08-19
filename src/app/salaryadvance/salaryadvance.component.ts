import { DatePipe, formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { LoginPojo } from '../master/model/login';
import { SalaryadvSave } from '../master/model/salaryadv';
import { SalaryadvanceService } from '../master/service/salaryadvance.service';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-salaryadvance',
  templateUrl: './salaryadvance.component.html',
  styleUrls: ['./salaryadvance.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class SalaryadvanceComponent implements OnInit {
  formgroup!: FormGroup;
  @ViewChild('designation') desgElement!: ElementRef;
  advsave: SalaryadvSave = new SalaryadvSave();
  pipe = new DatePipe('en-US');
  login: LoginPojo = new LoginPojo();
  constructor(public fb: FormBuilder, public service: SalaryadvanceService) { }

  ngOnInit(): void {
    const mySimpleFormat = this.pipe.transform(new Date(), 'MM/dd/yyyy');
    this.formgroup = this.fb.group({
      type: ["", [Validators.required]] || mySimpleFormat,
      date: ["", Validators.required],
      location: ["", Validators.required],
      for: ["", Validators.required],
      reason: ["", Validators.required]
    });
    setTimeout(() => {
      this.desgElement.nativeElement.focus();
    }, 0);
  }
  submit() {
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    if (this.formgroup.value.date < formattedDate) {
      alert("Back Date Not Allowed");
      return;
    }
    var sss = sessionStorage.getItem('logindet');
    if (sss) {
      this.login = JSON.parse(sss);
    }
    const mySimpleFormat = this.pipe.transform(this.formgroup.value.date, 'yyyy-MM-dd');
    if (mySimpleFormat) {
      this.advsave.date = mySimpleFormat;
    }
    this.advsave.staff_id = this.login.empcode;
    this.advsave.Status = 1;
    this.advsave.Created_by = this.login.empcode;
    this.advsave.Type = this.formgroup.value.type;
    this.advsave.amount = this.formgroup.value.for;
    this.advsave.staff_name = this.login.username;
    this.advsave.Reason = this.formgroup.value.reason;
    const save = JSON.stringify(this.advsave);
    this.service.savesalaryadv(save).then(data => {
      alert(data.message);
      this.ngOnInit();
    }, err => {
      alert(err);
    });
  }
}
