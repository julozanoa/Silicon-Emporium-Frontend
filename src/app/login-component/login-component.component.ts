import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;

  constructor() { }

  login() {
    console.log(this.email);
    console.log(this.password);
  }

  ngOnInit(): void {
  }

}
