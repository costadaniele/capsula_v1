import { Component, VERSION } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface Auth {
  token: string;
  username: string;
  profile: Array<String>;
}

interface Auth2 {
  token: string;
  username: string;
  profile: Array<String>;
}

interface Auth3 {
  token: string;
  username: string;
  profile: Array<String>;
}

interface Auth4 {
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

  login = '';
  password = '';

  nome = '';
  email = '';
  login2 = '';
  senha = '';
  cidade = '';
  estado = '';
  perfil = '';

  title = '';
  ano = '';
  descricao = '';
  imageUrl = '';

  auth = null;

  auth2 = null;

  auth3 = null;

  auth4 = null;

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

  postCadastro() {
    this.http
      .post<Auth2>(this.site + '/integrantes', {
        nome: this.nome,
        email: this.email,
        login: this.login2,
        senha: this.senha,
        cidade: this.cidade,
        estado: this.estado,
      })
      .subscribe((data) => {
        this.auth2 = data;
      });
  }

  postCapsula() {
    this.http
      .post<Auth3>(this.site + '/capsulas', {
        title: this.title,
        ano: this.ano,
        descricao: this.descricao,
        imageUrl: this.imageUrl,
        perfis: this.perfil,
      })
      .subscribe((data) => {
        this.auth4 = data;
      });
  }

  postRegiao() {
    this.http
      .post<Auth4>(this.site + '/regioes', {
        cidade: this.cidade,
        estado: this.estado,
      })
      .subscribe((data) => {
        this.auth3 = data;
        alert('Integrante cadastrado com sucesso!');
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

  getIntg() {
    this.http
      .get<any>(this.site + '/integrantes', {
        headers: { Authorization: 'Bearer ' + this.auth.token },
      })
      .subscribe((data) => {
        this.list = data;
      });
  }

  getListReg() {
    this.http
      .get<any>(this.site + '/regioes', {
        headers: { Authorization: 'Bearer ' + this.auth.token },
      })
      .subscribe((data) => {
        this.list = data;
      });
  }

  atualizar(id) {
    this.http
      .put<any>(this.site + '/capsulas' + id, {
        headers: { Authorization: 'Bearer ' + this.auth.token },
      })
      .subscribe((data) => {
        this.list = data;
      });
  }

  remover(id: number) {
    this.http
      .delete(this.site + '/capsulas/' + { id }, {
        headers: { Authorization: 'Bearer ' + this.auth.token },
      })
      .subscribe((data) => {
        this.list = data;
      });
  }
}
