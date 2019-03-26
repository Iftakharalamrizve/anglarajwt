import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public apiUrl = ' http://127.0.0.1:8000/api/auth/' ;
  constructor(private http: HttpClient,private token: TokenService) { }

  CreateRegister(user) {
    this.http.post( this.apiUrl+'register', user).subscribe(
      data =>  this.handleResponse(data),
      error => this.errorInfo(error)
    );
    
  }

  handleResponse(token){
     this.token.handle(token.access_token) ;
  }

  errorInfo(error){
    // console.log(error);
  }
}
