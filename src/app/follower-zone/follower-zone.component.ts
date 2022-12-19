import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follower-zone',
  templateUrl: './follower-zone.component.html',
  styleUrls: ['./follower-zone.component.css']
})
export class FollowerZoneComponent {

  constructor(private _users: UsersService, private _router: Router) { }

  default_img_url = '../../assets/images/default-logo.png'

  followers: any = []

  ngOnInit() {
    this._users.getFollowers().
      subscribe(
        res => this.followers = res.followers,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

  follow(id: string) {
    this._users.followUser(id).
      subscribe(
        res => {
          // Update followers
          this._users.getFollowers().
            subscribe(
              res => this.followers = res.followers,
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
          // Update followers
          this._users.getFollowers().
            subscribe(
              res => this.followers = res.followers,
              err => console.log(err)
            )
        },
        err => console.log(err)
      )
  }

}
