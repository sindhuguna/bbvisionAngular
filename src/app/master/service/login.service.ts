import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { LoginPojo } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(login: LoginPojo): Promise<any> {
    const url = environment.API_URL + 'loginconnect.php';
    const name = '{ "UserName": "' + login.username + '", "Password": "' + login.password + '"}';
    // const name ='{ "name": "riya" }';
    const json = JSON.parse(name);
    return this.http.post(url, json, this.httpOptions).toPromise();
  }


  namecheck(name: LoginPojo): Promise<any> {
    const url = environment.API_URL + 'loginconnect';
    return this.http.post(url, name, this.httpOptions).toPromise();
  }

  resetpassword(companyid: any): Promise<any> {
    const url = environment.API_URL + '/resetpassword';
    return this.http.post(url, companyid, this.httpOptions).toPromise();
  }

}
