import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateValidator } from '../common/datevalidator';
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
  selector: 'app-leavedialog',
  templateUrl: './leavedialog.component.html',
  styleUrls: ['./leavedialog.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class LeavedialogComponent implements OnInit {
  event: string = "";
  formGroupleave!: FormGroup;
  formGrouponduty!: FormGroup;
  formGroupperm!: FormGroup;
  pipe = new DatePipe('en-US');
  now = Date.now();
  constructor(public dialogRef: MatDialogRef<LeavedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }
  leavetype: any[] = [];
  halffull: any[] = [
    { code: 0, name: 'Half Day' },
    { code: 1, name: 'Full Day' }
  ];
  client: any[] = [
    { code: 0, name: 'HOG' },
    { code: 1, name: 'GRT' }
  ];
  type: boolean = false;
  date = new FormControl(new Date());
  @Output()
  dateChange: EventEmitter<MatDatepickerInputEvent<any>> = new EventEmitter();
  leavedet: any[] = [{ code: 0, days: 1 }, { code: 1, days: 5 }, { code: 2, days: 12 }];
  ngOnInit(): void {
    const mySimpleFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
    this.event = this.data.row;
    this.leavetype = this.data.leavetype;
    if (this.event === 'Leave') {
      this.formGroupleave = this.fb.group({
        leavetype: ['', Validators.required],
        fromdate: [this.data.date, [Validators.required]] || mySimpleFormat,
        todate: ['', [Validators.required]] || mySimpleFormat,
        days: [0, Validators.required],
        type: '',
        // adresses: this.fb.array([])
      }, { validator: DateValidator });
    } else if (this.event === 'OnDuty') {
      this.formGrouponduty = this.fb.group({
        client: ['', Validators.required],
        date: [this.data.date, [Validators.required]] || mySimpleFormat,
        location: ['', Validators.required],
        purpose: ['', Validators.required]
      });
    } else if (this.event === 'Permission') {
      this.formGroupperm = this.fb.group({
        date: [
          this.data.date, [Validators.required]],
        fromtime: ['', Validators.required],
        totime: ['', Validators.required]
      });
    }


  }
  onfromDateChange(): void {
    const mySimpleFormat = this.pipe.transform(this.formGroupleave.value.fromdate, 'MM/dd/yyyy');
    this.formGroupleave.value.fromdate = mySimpleFormat;
    var date1 = this.formGroupleave.value.fromdate;
    var date2 = this.formGroupleave.value.todate;
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this.formGroupleave.patchValue({
      days: Difference_In_Days + 1
    })
    if (this.formGroupleave.value.days === 1) {
      this.type = true;
    } else {
      this.type = false;
    }
  }
  ontoDateChange(): void {
    if (this.formGroupleave.value.todate < this.formGroupleave.value.fromdate) {
      alert("To Date Should Not Be Greater than From Date");
      return;
    }
    const mySimpleFormat = this.pipe.transform(this.formGroupleave.value.todate, 'MM/dd/yyyy');
    this.formGroupleave.value.todate = mySimpleFormat;
    var date1 = new Date(this.formGroupleave.value.fromdate);
    var date2 = new Date(this.formGroupleave.value.todate);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if (Difference_In_Days > this.formGroupleave.value.leavetype.available) {
      alert("Leave exceed");
    }
    this.formGroupleave.patchValue({
      days: Difference_In_Days + 1
    })
    if (this.formGroupleave.value.days === 1) {
      this.type = true;
    } else {
      this.type = false;
    }
  }
  onChangeHour(event: any) {
    console.log('event', event);
  }
  submitleavetype() {
    if (this.formGroupleave.value.todate < this.formGroupleave.value.fromdate) {
      alert("To Date Should Not Be Greater than From Date");
      return;
    }
    this.dialogRef.close(this.formGroupleave.value);
  }
  submitonduty() {
    console.log(this.formGroupleave.value);
  }
  submitperm() {
    console.log(this.formGroupleave.value);
  }
}
