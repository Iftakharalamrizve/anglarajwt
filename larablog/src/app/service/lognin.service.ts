import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TokenService} from './token.service';
@Injectable({
  providedIn: 'root'
})
// data => this.token.passToken(data.access_token),
export class LogninService {
  public accessToken:any;
  public loginUrl = ' http://127.0.0.1:8000/api/auth/' ;
  constructor(private http: HttpClient,private token: TokenService) { }
  checkLogin(info) {
    this.http.post( this.loginUrl + 'login', info).subscribe(
      data => this.handleResponse(data),
      error => console.log(error)
    );
  }

  handleResponse(token){
    this.token.handle(token.access_token);
  }
}
