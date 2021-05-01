import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = environment.baseURL + 'auth';
  constructor(
      private http: HttpClient,
      private router: Router
  ) { }

  login(user : any) {
    return this.http.post(this.authUrl + '/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  register(formData : any) {
    return this.http.post(this.authUrl + '/register', formData);
  }

  registerCometChat(data : any) {
    return this.http.post('https://api-us.cometchat.io/v2.0/users', data);
  }

  loginCometChat(uid) {
    return this.http.get('https://api-us.cometchat.io/v2.0/users/' + uid);
  }
}
