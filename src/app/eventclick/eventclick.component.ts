import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-eventclick',
  templateUrl: './eventclick.component.html',
  styleUrls: ['./eventclick.component.css']
})
export class EventclickComponent implements OnInit {
  events: any;
  constructor(public dialogRef: MatDialogRef<EventclickComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.events = this.data.row[0];
  }
  close() {
    this.dialogRef.close();
  }
}
