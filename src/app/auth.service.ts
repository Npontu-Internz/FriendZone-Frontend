import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  endpoint = `https://friendzone.up.railway.app`

  private _registerUrl = `${this.endpoint}/api/v1/auth/register`
  private _loginUrl = `${this.endpoint}/api/v1/auth/login`

  register(user: any) {
    return this.http.post<any>(this._registerUrl, user)
  }

  login(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  clearToken() {
    localStorage.removeItem('token')
  }
}
