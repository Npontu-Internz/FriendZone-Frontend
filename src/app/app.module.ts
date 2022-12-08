import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { FollowerZoneComponent } from './follower-zone/follower-zone.component';
import { LoginComponent } from './login/login.component';
import { OnlineZoneComponent } from './online-zone/online-zone.component';
import { RegisterComponent } from './register/register.component';
import { AppbarComponent } from './appbar/appbar.component'
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { FollowingZoneComponent } from './following-zone/following-zone.component';
import { DialogComponent } from './appbar/appbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OnlineZoneComponent,
    FollowerZoneComponent,
    AppbarComponent,
    FollowingZoneComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
