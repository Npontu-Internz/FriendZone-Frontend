import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _getUsersUrl = "http://localhost:5000/"
  private _getPrivateUsersUrl = "http://localhost:5000/api/v1/users/private-users"
  private _getFollowersUrl = "http://localhost:5000/api/v1/users/followers"
  private _getFollowingUrl = "http://localhost:5000/api/v1/users/following"
  private _updateProfilePictureUrl = "http://localhost:5000/api/v1/users/update-picture"
  private _followUserUrl = "http://localhost:5000/api/v1/users/follow"
  private _unfollowUserUrl = "http://localhost:5000/api/v1/users/unfollow"

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this._getUsersUrl)
  }

  getPrivateUsers() {
    return this.http.get<any>(this._getPrivateUsersUrl)
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

  followUser(id: string) {
    return this.http.post<any>(this._followUserUrl + `/${id}`, {})
  }

  unfollowUser(id: string) {
    return this.http.post<any>(this._unfollowUserUrl + `/${id}`, {})
  }


}
