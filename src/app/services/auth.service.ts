import { Injectable } from '@angular/core';
import { UserLoginDto } from '../models/UserLoginDto';
import { UserRegisterDto } from '../models/UserRegisterDto';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(model: UserRegisterDto) {
    return this.http.post<any>(BASE_URL + "/auth/register", model);
  }

  login(model: UserLoginDto) {
    return this.http.post<any>(BASE_URL + "/auth/login", model);
  }

  logout() {
    localStorage.removeItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
