import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public apiUrl = ' http://127.0.0.1:8000/api/auth/' ;
  constructor(private http: HttpClient) { }

  CreateRegister(user) {
    this.http.post( this.apiUrl+'register', user).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
