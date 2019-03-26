import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  constructor(private token : TokenService) { }
  authStatus =this.loggedIn.asObservable();
  changeAuthstatus(value:boolean){
    this.loggedIn.next(value);
  }
}
