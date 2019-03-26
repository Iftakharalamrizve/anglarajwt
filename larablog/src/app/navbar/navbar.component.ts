import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenService} from '../service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loogedIn :boolean;
  constructor(
    private auth: AuthService,
    private route: Router,
    private token : TokenService
  ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value=>this.loogedIn=value);
  }


  logout(event : MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthstatus(false);
    this.route.navigateByUrl('/login');
  }

}
