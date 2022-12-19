import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _auth: AuthService, private _router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      // Process the form values
      const formValues = this.loginForm.value;

      this._auth.login(formValues).
        subscribe(
          res => {
            localStorage.setItem('token', res.token)
            this._router.navigate(['/online-zone'])
          },
          err => {
            alert(err.error.msg)
          }
        )

    }
  }


}
