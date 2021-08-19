import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { __param } from 'tslib';
import { map, startWith } from 'rxjs/operators';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { MatListItem } from '@angular/material/list';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-eventdialog',
  templateUrl: './eventdialog.component.html',
  styleUrls: ['./eventdialog.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class EventdialogComponent implements OnInit {
  // fromdate = new FormControl(moment());
  // todate = new FormControl(moment());
  // maxDate = new Date();
  // minDate = new Date();
  // myControl = new FormControl();
  // permissionboolean: boolean = false;
  // options: string[] = ['Sick Leave', 'Maternity Leave', 'Paternity Leave', 'Bereavement Leave', 'Compensatoy Leave', 'Permission'];
  // filteredOptions!: Observable<string[]>;

  Events: any[];

  constructor(
    public dialogRef: MatDialogRef<EventdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Events = [];
  }

  ngOnInit(): void {
    // this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filter(value))
    //   );
    this.Events = [];
    this.Events = this.data.row;
  }
  getBackgroundColor(link: any) {
    return link.color;
  }
  onNoClick(): void {
    this.dialogRef.close();
    this.Events = [];
  }
  listselect(event: MatListItem) {
    this.dialogRef.close(event);
  }
  // getPosts(selectedoptions: any) {
  //   if (selectedoptions === 'Permission') {
  //     this.permissionboolean = true;
  //   } else {
  //     this.permissionboolean = false;
  //   }
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }
}
