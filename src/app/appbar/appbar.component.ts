import { Component, Inject, HostListener, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent {

  constructor(
    private _auth: AuthService,
    private _users: UsersService,
    private _dialog: MatDialog) { }

  default_img_url = '../../assets/images/default-logo.png'

  user: any = {
    profileImage: {
      secure_url: ''
    }
  }
  fetchedUser = false

  userLoggedIn() {
    if (this._auth.isLoggedIn()) {
      if (!this.fetchedUser) {
        this._users.getCurrentUser().
          subscribe(
            res => {
              const { profileImage } = res.user[0]
              let newUser = {}

              if (!profileImage) {
                newUser = {
                  ...res.user[0],
                  profileImage: {
                    secure_url: this.default_img_url
                  }
                }
              } else {
                newUser = res.user[0]
              }

              this.user = newUser
            },
            err => console.log(err)
          )
        this.fetchedUser = true
      }
      return true
    } else {
      return false
    }
  }

  logout() {
    this.fetchedUser = false
    this._auth.clearToken()
  }

  uploadDialog() {
    const data = {
      imageURL: this.user.profileImage.secure_url
    }

    const config = new MatDialogConfig()
    config.data = data

    this._dialog.open(DialogComponent, config).afterClosed().subscribe(
      res => {
        if (res) {
          if (res.updated) {
            this.user.profileImage.secure_url = res.image
          }
        }
      },
      err => {
        console.log(err)
      }
    );
  }

}


@Component({
  selector: 'app-dialog',
  template: `
    <div class="card" style="position: fixed; top: 20%; right: 40%; z-index: 9999;">
            <div class="card-header">
                <h4 class="mb-0">
                    Upload Photo
                </h4>
            </div>
            <div class="card-body d-flex align-items-center">
                <form class="form text-center">
                    <div class="form-group">
                        <div class="avatar-container">
                            <div class="custom-avatar">
                                <img *ngIf="imageData.profileImage" [src]="imageData.profileImage" class="avatar-img mb-2">
                            </div>
                            <div class="form-group">
                            <div><label for="">Avatar</label></div>
                            <div><input (change)="selectFile($event)" type="file" name="profileImage" accept="image/*">
                            </div></div>
                        </div>
                    </div>

                    <button (click)="uploadPicture()" type="submit" class="btn btn-warning float-right mb-2 text-white">Upload</button>
                </form>
            </div>
        </div>
  `,
  styleUrls: ['./appbar.component.css']
})
export class DialogComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _users: UsersService,
    private elementRef: ElementRef) { }

  imageData: any = {}
  pictureUpdated = false
  clickCounter = 0

  ngOnInit() {
    this.imageData.profileImage = this.data.imageURL
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.clickCounter >= 3) {
      this.clickCounter = 0
    }
    // Check if the target element of the event is outside the dialog
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // If it is, close the dialog
      this.clickCounter += 1
      if (this.clickCounter == 2) {
        this.dialogRef.close()
      }
    }
  }

  selectFile(event: any) {
    try {
      if (event.target.files) {
        var reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (event: any) => {
          this.imageData.profileImage = event.target.result
          this.pictureUpdated = true
        }

      }
    } catch (e) {
      console.log('Error uploading picture')
    }

  }

  uploadPicture() {
    if (this.pictureUpdated) {
      this._users.updateProfilePicture(this.imageData).
        subscribe(
          res => {
            const output = {
              updated: this.pictureUpdated,
              image: this.imageData.profileImage,
            }
            console.log(res)
            this.dialogRef.close(output)
          },
          err => console.log(err)
        )
    }
  }

}