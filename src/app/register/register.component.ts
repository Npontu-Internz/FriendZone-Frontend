import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _auth: AuthService, private _router: Router) { }


  registerUserData: any = {}

  registerUser() {
    this._auth.register(this.registerUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['/online-zone'])
        },
        err => console.log(err)
      )
  }

  image_url = ''
  default_img_url = '../../assets/images/default.png'

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

}

