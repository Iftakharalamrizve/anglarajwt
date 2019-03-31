import { IEmployee } from './../modal/iemployee';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public employees = [];
  errorMsg: any;
  public record: any = '' ;
  constructor(private dashboard: DashboardService) { }

  ngOnInit() {
    this.dashboard.get_user_lis()
    .subscribe(data => this.dataslice(data),
      error => console.log(error));
  }
  public dataslice(data) {
    this.record = data.response;
  }

  updateInfo(userUpdate){
    const data={
      name:userUpdate.name,
      email:userUpdate.email
    }
    this.dashboard.update_user_info(data,userUpdate.id);
  }
}
