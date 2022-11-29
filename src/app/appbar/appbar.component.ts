import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent {

  constructor(private _auth: AuthService) { }

  userLoggedIn() {
    return this._auth.isLoggedIn()
  }

  logout() {
    this._auth.clearToken()
  }
}
