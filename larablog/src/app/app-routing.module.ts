import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import './login/login.component.css';
import './register/register.component.css';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { GuestGuard } from './Guard/guest.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'dashboard', component: DashboardComponent ,canActivate:[AuthGuard] },
  { path: ' ', redirectTo:'home',pathMatch:'full' },
  { path: 'login', component: LoginComponent,canActivate:[GuestGuard]  },
  { path: 'register', component: RegisterComponent,canActivate:[GuestGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
