import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _getUsersUrl = "http://localhost:5000/"
  private _getFollowersUrl = "http://localhost:5000/api/v1/users/followers"
  private _getFollowingUrl = "http://localhost:5000/api/v1/users/following"
  private _updateProfilePictureUrl = "http://localhost:5000/api/v1/users/update-picture"

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this._getUsersUrl)
  }

  getFollowers() {
    return this.http.get<any>(this._getFollowersUrl)
  }

  getFollowing() {
    return this.http.get<any>(this._getFollowingUrl)
  }

  updateProfilePicture(image: string) {
    return this.http.post<any>(this._updateProfilePictureUrl, image)
  }



}
