import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private _registerUrl = "http://localhost:5000/api/v1/auth/register"
  private _loginUrl = "http://localhost:5000/api/v1/auth/login"

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
