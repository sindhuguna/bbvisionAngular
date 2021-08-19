import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeelistComponent } from '../employeelist/employeelist.component';

@Component({
  selector: 'app-dateclick',
  templateUrl: './dateclick.component.html',
  styleUrls: ['./dateclick.component.css']
})
export class DateclickComponent implements OnInit {
  events: any;
  playerName!: string;
  emplist!: any[];
  constructor(public dialogRef: MatDialogRef<DateclickComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.events = this.data.row[0];
  }
  close() {
    this.dialogRef.close();
  }
  onChangeHour(event: any) {
    console.log('event', event);
  }
  memberlistopen() {
    const dialogRef = this.dialog.open(EmployeelistComponent, {
      disableClose: false,
      maxWidth: '400px',
      minWidth: '400px',
      maxHeight: '400px',
      minHeight: '400px',
      data: { row: this.emplist }
    });
  }
}
