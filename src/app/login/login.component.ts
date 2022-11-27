import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _auth: AuthService) { }

  loginUserData: any = {}

  loginUser() {
    this._auth.login(this.loginUserData).
      subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
