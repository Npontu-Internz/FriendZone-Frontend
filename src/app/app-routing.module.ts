import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowerZoneComponent } from './follower-zone/follower-zone.component';
import { LoginComponent } from './login/login.component';
import { OnlineZoneComponent } from './online-zone/online-zone.component';
import { RegisterComponent } from './register/register.component';

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
    component: FollowerZoneComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
