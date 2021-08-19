import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Calendar, CalendarOptions, EventInput, FullCalendarComponent } from '@fullcalendar/angular';
import { CommonService } from '../common/common.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Router } from '@angular/router';
import { DateclickComponent } from '../dateclick/dateclick.component';
import { EventclickComponent } from '../eventclick/eventclick.component';
import { CalenderService } from '../master/service/calender.service';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  @ViewChild('fullcalendar') calendarComponent!: FullCalendarComponent;
  emplist: any[] = [];
  calendarEvents: EventInput[] = [];
  calendarOptions!: CalendarOptions;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin];

  calendarApi!: Calendar;
  initialized = false;
  Events = [];
  Eventsdialog = [];
  constructor(public dialog: MatDialog, private calenderservice: CalenderService, private nameservice: CommonService, public router: Router) { }

  ngOnInit(): void {
    this.nameservice.getEvents().subscribe(data => {
      this.calendarOptions = {
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGrid,dayGridMonth'
        },
        initialView: 'dayGridMonth',
        dayMaxEvents: true,
        weekends: true,
        events: data,
        plugins: [dayGridPlugin, interactionPlugin],
        dateClick: this.handleDateClick.bind(this),
        eventClick: this.handleEventClick.bind(this)
      };
    });
  }
  handleDateClick(arg: any) {
    this.nameservice.getEvents().subscribe(data => {
      this.Events = data;
    });
    this.Eventsdialog = [];
    for (let e of this.Events) {
      if (e['start'] === arg.dateStr) {
        this.Eventsdialog.push(e);
      }
    }
    this.calenderservice.employeelist().subscribe(data => {
      this.emplist = data;
    });
    const dialogRef = this.dialog.open(DateclickComponent, {
      disableClose: true,
      maxWidth: '400px',
      minWidth: '400px',
      maxHeight: '400px',
      minHeight: '400px',
      data: { row: this.Eventsdialog }
    });
  }
  handleEventClick(arg: any) {
    this.nameservice.getEvents().subscribe(data => {
      this.Events = data;
    });
    this.Eventsdialog = [];

    for (let e of this.Events) {
      if (e['time'] === arg.event._def.extendedProps.time && e['description'] === arg.event._def.extendedProps.description && e['title'] === arg.event._def.title) {
        this.Eventsdialog.push(e);
      }
    }
    const dialogRef = this.dialog.open(EventclickComponent, {
      disableClose: true,
      maxWidth: '400px',
      minWidth: '400px',
      maxHeight: '200px',
      minHeight: '200px',
      data: { row: this.Eventsdialog, emp: this.emplist }
    });
  }

  ngAfterViewChecked() {
    // this.calendarApi = this.calendarComponent.getApi();

    // if (this.calendarApi && !this.initialized) {
    //   this.initialized = true;
    //   this.loadEvents();
    // }

  }

  loadEvents() {
    const event = {
      title: 'test',
      start: Date.now(),
      allDay: true
    };
    // this.calendarEvents.push(event);
    // this.calendarApi.removeAllEventSources();
    // this.calendarApi.addEventSource(this.calendarEvents);
  }
  onEventRender(info: any) {
    console.log('onEventRender', info.el);
    // const tooltip = new Tooltip(info.el, {
    //   title: info.event.title,
    //   placement: 'top-end',
    //   trigger: 'hover',
    //   container: 'body'
    // });
  }
}
