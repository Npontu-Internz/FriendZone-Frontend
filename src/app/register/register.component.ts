import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _auth: AuthService) { }


  registerUserData: any = {}

  registerUser() {
    this._auth.register(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

  url = ''

  selectFile(event: any) {
    try {
      if (event.target.files) {
        var reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (event: any) => {
          this.url = event.target.result
          this.registerUserData.profileImage = event.target.result

        }

      }
    } catch (e) {
      this.url = ''
    }

  }

}

