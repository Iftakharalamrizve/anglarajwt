import { Component, OnInit } from '@angular/core';
import { LogninService } from '../service/lognin.service';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public status :any=false;
  constructor(
        private login: LogninService ,
        private route: Router,
        private token : TokenService,
        private auth : AuthService,
      ) { }

  ngOnInit() {
  }

  OnSubLog( data ) {
    const loginfo = {
      email : data.controls.email.value,
      password : data.controls.password.value
    };
    this.login.checkLogin(loginfo);
    this.auth.changeAuthstatus(true);
    this.route.navigateByUrl('/dashboard');
  }

}
