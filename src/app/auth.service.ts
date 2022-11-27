import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:5050/api/v1/auth/register"

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post<any>(this.registerUrl, user)
  }
}
