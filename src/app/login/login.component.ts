import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _auth: AuthService, private _router: Router) { }

  loginUserData: any = {}

  loginUser() {
    this._auth.login(this.loginUserData).
      subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['/online-zone'])
        },
        err => console.log(err)
      )
  }

}
