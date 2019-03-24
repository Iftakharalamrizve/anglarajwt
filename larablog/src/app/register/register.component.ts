import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private regiser: RegisterService) { }

  ngOnInit() {
  }
  onFormSubmit(data){

    const user = {
      name: data.controls.name.value,
      email : data.controls.email.value,
      password : data.controls.password.value
    };
    this.regiser.CreateRegister(user);
  }

}
