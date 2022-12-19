import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endpoint = `https://friendzone.up.railway.app`

  private _getUsersUrl = `${this.endpoint}`
  private _getCurrentUserUrl = `${this.endpoint}/api/v1/users/current-user`
  private _getPrivateUsersUrl = `${this.endpoint}/api/v1/users/private-users`
  private _getFollowersUrl = `${this.endpoint}/api/v1/users/followers`
  private _getFollowingUrl = `${this.endpoint}/api/v1/users/following`
  private _updateProfilePictureUrl = `${this.endpoint}/api/v1/users/update-picture`
  private _followUserUrl = `${this.endpoint}/api/v1/users/follow`
  private _unfollowUserUrl = `${this.endpoint}/api/v1/users/unfollow`

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

  updateProfilePicture(image: any) {
    return this.http.post<any>(this._updateProfilePictureUrl, image)
  }

  followUser(id: string) {
    return this.http.post<any>(this._followUserUrl + `/${id}`, {})
  }

  unfollowUser(id: string) {
    return this.http.post<any>(this._unfollowUserUrl + `/${id}`, {})
  }

  getCurrentUser() {
    return this.http.get<any>(this._getCurrentUserUrl)
  }


}
