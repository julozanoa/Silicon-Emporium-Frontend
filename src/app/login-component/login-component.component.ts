import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  username!:string;
  password!:string;

  constructor() { }

  ngOnInit(): void {
  }


  login(){
    console.log(this.username)
    console.log(this.password)
  }

}
