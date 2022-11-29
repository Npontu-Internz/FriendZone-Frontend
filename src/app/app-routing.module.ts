import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FollowerZoneComponent } from './follower-zone/follower-zone.component';
import { LoginComponent } from './login/login.component';
import { OnlineZoneComponent } from './online-zone/online-zone.component';
import { RegisterComponent } from './register/register.component';
import { FollowingZoneComponent } from './following-zone/following-zone.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/online-zone',
    pathMatch: 'full'

  },
  {
    path: 'online-zone',
    component: OnlineZoneComponent
  },
  {
    path: 'follower-zone',
    component: FollowerZoneComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'following-zone',
    component: FollowingZoneComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
