import { Component, OnInit } from '@angular/core';
import { LogninService } from '../service/lognin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LogninService) { }

  ngOnInit() {
  }

  OnSubLog( data ) {
    const loginfo = {
      email : data.controls.email.value,
      password : data.controls.password.value
    };
    this.login.checkLogin(loginfo);
  }

}
