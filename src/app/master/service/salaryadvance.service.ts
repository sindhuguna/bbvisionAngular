import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SalaryadvanceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  savesalaryadv(salaryadvformsave: any): Promise<any> {
    const url = environment.API_URL + 'API/staff_advance_creation.php';
    return this.http.post(url, salaryadvformsave, this.httpOptions).toPromise();
  }
}
