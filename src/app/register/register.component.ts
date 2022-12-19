import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _auth: AuthService, private _router: Router) { }


  registerUserData: any = {}

  // registerUser() {
  //   this._auth.register(this.registerUserData)
  //     .subscribe(
  //       res => {
  //         localStorage.setItem('token', res.token)
  //         this._router.navigate(['/online-zone'])
  //       },
  //       err => console.log(err)
  //     )
  // }

  image_url = ''
  default_img_url = '../../assets/images/default-logo.png'

  selectFile(event: any) {
    try {
      if (event.target.files) {
        var reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (event: any) => {
          this.image_url = event.target.result
          this.registerUserData.profileImage = event.target.result

        }

      }
    } catch (e) {
      this.image_url = ''
    }

  }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.registerForm.valid) {
      // Process the form values
      const { name, email, password } = this.registerForm.value;

      let formValues: any = {
        name,
        email,
        password
      }

      if (this.registerUserData.profileImage) {
        formValues.profileImage = this.registerUserData.profileImage
      }

      this._auth.register(formValues)
        .subscribe(
          res => {
            localStorage.setItem('token', res.token)
            this._router.navigate(['/online-zone'])
          },
          err => alert(err.error.msg)
        )

    }
  }

}

