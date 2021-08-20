import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event, NavigationEnd, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/of';
import { environment } from 'src/environments/environment.prod';
import { MessageComponent } from './message/message.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>('');

  public apiData: any = [
    { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
    { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
    { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
    { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." }];


  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }
  public checkData(): Observable<any> {
    return Observable.of(this.apiData);
  }
  public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);

    let data: any = [
      // {
      //   description: 'Present',
      //   title: 'P',
      //   start: '2021-05-07',
      //   color: '#228B22'
      // },
      {
        description: 'BBEvening Meeting',
        title: 'BBMorning Meeting 09.15 AM to 09.45 AM 2021-06-09',
        start: '2021-06-09',
        time: '9.00 AM to 11.00 AM',
        color: '#0041C2'

      },
      {
        description: 'BBMorning Meeting',
        title: 'BBMorning Meeting 10.15 AM to 10.45 AM 2021-06-09',
        start: '2021-06-09',
        time: '10.00 AM to 10.30 AM',
        color: '#0041C2'
      },
      {
        description: 'BBEvening Meeting',
        title: 'BBEvening Meeting 05.30 AM to 06.00 AM 2021-06-09',
        start: '2021-06-09',
        time: '9.00 AM to 11.00 AM',
        color: '#0041C2'
      },
      {
        description: 'Permission',
        title: 'Perm',
        start: '2021-05-03',
        color: '#FFB6C1',
        time: '9.00 AM to 11.00 AM'
      },
      {
        description: 'FullDay Leave',
        title: 'A',
        start: '2021-05-20',
        color: '#db3737'
      },
      {
        description: 'CompOff Leave',
        title: 'C',
        start: '2021-05-25',
        color: '#B2BEB5'
      }
    ];
    return Observable.of(data);
  }
  upload(file: any): Observable<any> {
    const formData = new FormData();
    const name = '{ "name": "riya" }';
    const json = JSON.parse(name);
    return this.http.post(environment.API_URL, json)
  }
  // upload(file: any): Observable<any> {
  //   const headers = { 'content-type': 'application/json' }
  //   const name = '{ "name": "riya" }';
  //   // const json = JSON.parse(name);
  //   const body = JSON.stringify(name);
  //   return this.http.post(this.uploadurl, body, { 'headers': headers })
  // }
  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
    // this.appDrawer.toggle();
  }
  public togglemenu() {
    this.appDrawer.toggle();
  }
  async deptselect(): Promise<any> {
    const url = environment.API_URL + 'select/department_mapping/depart_select.php';
    return this.http.post(url, this.httpOptions).toPromise();
  }
  async compselect(): Promise<any> {
    const url = environment.API_URL + 'select/company_mapping/company_select.php';
    return this.http.post(url, this.httpOptions).toPromise();
  }
  async headselect(): Promise<any> {
    const url = environment.API_URL + 'select/head_mapping/head_select.php';
    return this.http.post(url, this.httpOptions).toPromise();
  }


  message(title: string, message: string, type: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: title,
      message: message,
      type: type
    };
    dialogConfig.minWidth = 400;
    const dialogRef = this.dialog.open(MessageComponent, dialogConfig);
  }
}
