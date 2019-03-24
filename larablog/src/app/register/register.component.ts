import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private regiser : RegisterService) { }

  ngOnInit() {
  }
  onFormSubmit(){
    console.log('hello');
  }

}
