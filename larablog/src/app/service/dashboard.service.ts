// import { Observable } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' ;
import {IEmployee} from '../modal/iemployee';
// import {User} from '../interface/user';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public url: any = 'http://127.0.0.1:8000/api/auth/user';
  constructor(private http: HttpClient) { }
  get_user_lis(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
  }

}
