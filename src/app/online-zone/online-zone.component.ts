import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-online-zone',
  templateUrl: './online-zone.component.html',
  styleUrls: ['./online-zone.component.css']
})
export class OnlineZoneComponent {

  constructor(private _users: UsersService) { }

  users: any = []

  ngOnInit() {
    this._users.getUsers().
      subscribe(
        res => this.users = res.users,
        err => console.log(err)
      )
  }

}
