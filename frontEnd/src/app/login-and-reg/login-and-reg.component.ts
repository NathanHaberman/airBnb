import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginTest } from '../login-test';

import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-and-reg',
  templateUrl: './login-and-reg.component.html',
  styleUrls: ['./login-and-reg.component.css']
})
export class LoginAndRegComponent implements OnInit {
  user = new User()

  loginTest = new LoginTest()

  errors: any;

  constructor(
    private _apiService: ApiService,
    private _route: Router,
  ) { } 

  ngOnInit() {
  }

  register(){
    this._apiService.register(this.user)
    .then(data => {
      if (data.good){
        this._route.navigateByUrl('browse');
      }
      else{
        console.log("<>Errors")
        this.errors = data.errors
      }
    })
  }

}
