import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss={
    login :"http://127.0.0.1:8000/api/auth/login",
    singup : "http://127.0.0.1:8000/api/auth/register"
  }

  constructor() { }
  handle(token) {
     const settokencheck:any= this.setToken(token);
    if(settokencheck){
      return this.isValid();
    }else{
      return false;
    }
  }

  setToken( token ){
    return localStorage.setItem('token', token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

  isValid(){
    const checkToken =this.get();
    if(checkToken){
      const payLoad =this.payload(checkToken);
      if(payLoad){
       return  Object.values(this.iss).indexOf(payLoad.iss)>-1?true:false;
      }
    }
    return false;
  }

  payload(token){
    const splitToken = token.split('.')[1];
    return this.decode(splitToken);
  }

  decode(splitToken){
    return JSON.parse(atob(splitToken));
  }

  loggedIn(){
    return this.isValid();
  }
}
