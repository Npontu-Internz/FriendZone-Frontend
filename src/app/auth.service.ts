import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:5000/api/v1/auth/register"
  private loginUrl = "http://localhost:5000/api/v1/auth/login"

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post<any>(this.registerUrl, user)
  }

  login(user: any) {
    console.log('Should work')
    return this.http.post<any>(this.loginUrl, user)
  }
}
