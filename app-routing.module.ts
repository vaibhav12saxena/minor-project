import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import{UpdateComponent} from './components/update/update.component'
import{HomeComponent} from './components/home/home.component'
import { LoginComponent } from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';

const routes:Routes=[
  {path:'', redirectTo:'/login', pathMatch:'full'

  },
{
    path: 'update',
    component: UpdateComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'signup',
  component: SignupComponent
}
]
@NgModule({
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
