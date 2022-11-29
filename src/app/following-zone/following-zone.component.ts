import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-following-zone',
  templateUrl: './following-zone.component.html',
  styleUrls: ['./following-zone.component.css']
})
export class FollowingZoneComponent {

  constructor(private _users: UsersService, private _router: Router) { }

  followings: any = []

  ngOnInit() {
    this._users.getFollowing().
      subscribe(
        res => this.followings = res.following,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

}
