import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-online-zone',
  templateUrl: './online-zone.component.html',
  styleUrls: ['./online-zone.component.css']
})
export class OnlineZoneComponent {

  constructor(private _users: UsersService, private _auth: AuthService) { }

  default_img_url = '../../assets/images/default-logo.png'

  users: any = []

  ngOnInit() {
    // Requests for private users
    if (this._auth.isLoggedIn()) {
      this._users.getPrivateUsers().
        subscribe(
          res => this.users = res.users,
          err => console.log(err)
        )
    }// Requests of all users
    else {
      this._users.getUsers().
        subscribe(
          res => {
            this.users = res.users
          },
          err => console.log(err)
        )
    }
  }

  userLoggedIn() {
    return this._auth.isLoggedIn();
  }

  follow(id: string) {
    this._users.followUser(id).
      subscribe(
        res => {
          // Update users
          this._users.getPrivateUsers().
            subscribe(
              res => this.users = res.users,
              err => console.log(err)
            )
        },
        err => console.log(err)
      )
  }

  unfollow(id: string) {
    this._users.unfollowUser(id).
      subscribe(
        res => {
          // Update users
          this._users.getPrivateUsers().
            subscribe(
              res => this.users = res.users,
              err => console.log(err)
            )
        },
        err => console.log(err)
      )
  }

}
