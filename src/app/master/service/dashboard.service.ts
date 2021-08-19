import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private router: Router, private http: HttpClient) {

  }
  submitleavetype(leaveformsave: any): Promise<any> {
    const url = environment.API_URL + 'API/staff_leave_creation.php';
    return this.http.post(url, leaveformsave, this.httpOptions).toPromise();
  }
  getleavetype(empcode: number): Promise<any> {
    debugger;
    const name = '{ "StaffId": "' + empcode + '"}';
    const json = JSON.parse(name);
    const url = environment.API_URL + 'API/leave_balance_page.php';
    return this.http.post(url, json, this.httpOptions).toPromise();
  }

  dashboardbirthday(companyid: any): Promise<any> {
    const url = environment.API_URL + '/login';
    return this.http.post(url, companyid, this.httpOptions).toPromise();
  }

  dashboardpiechart(companyid: any): Promise<any> {
    const url = environment.API_URL + '/login';
    return this.http.post(url, companyid, this.httpOptions).toPromise();
  }

  dashboardrewards(companyid: any): Promise<any> {
    const url = environment.API_URL + '/login';
    return this.http.post(url, companyid, this.httpOptions).toPromise();
  }

  dashboardannouncement(companyid: any): Promise<any> {
    const url = environment.API_URL + '/login';
    return this.http.post(url, companyid, this.httpOptions).toPromise();
  }

  dashboardinterviewschedule(companyid: any): Promise<any> {
    const url = environment.API_URL + '/login';
    return this.http.post(url, companyid, this.httpOptions).toPromise();
  }

  dashboarddocument(companyid: any): Promise<any> {
    const url = environment.API_URL + '/login';
    return this.http.post(url, companyid, this.httpOptions).toPromise();
  }

  dashboardnewjoin(companyid: any): Promise<any> {
    const url = environment.API_URL + '/login';
    return this.http.post(url, companyid, this.httpOptions).toPromise();
  }

  dashboardinterviewstatus(companyid: any): Promise<any> {
    const url = environment.API_URL + '/login';
    return this.http.post(url, companyid, this.httpOptions).toPromise();
  }

}
