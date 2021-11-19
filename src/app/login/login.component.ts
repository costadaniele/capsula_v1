import { Component, VERSION } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface Auth {
  token: string;
  username: string;
  profile: Array<String>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  site = 'https://warm-eyrie-48554.herokuapp.com';
  name = 'Cápsulas Sonoras';

  login = 'daniele@gmail';
  password = '789';

  auth = null;

  list = null;

  listintg = null;

  constructor(private http: HttpClient) {}

  postLogin() {
    this.http
      .post<Auth>(this.site + '/login', {
        login: this.login,
        senha: this.password,
      })
      .subscribe((data) => {
        this.auth = data;
      });
  }

  postLogout() {
    this.auth = null;
  }

  getList() {
    this.http
      .get<any>(this.site + '/capsulas', {
        headers: { Authorization: 'Bearer ' + this.auth.token },
      })
      .subscribe((data) => {
        this.list = data;
      });
  }

  getListInt() {
    this.http
      .get<any>(this.site + '/integrantes/', {
        headers: { Authorization: 'Bearer ' + this.auth.token },
      })
      .subscribe((data) => {
        this.list = data;
      });
  }
}
