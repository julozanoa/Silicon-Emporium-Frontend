import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Model';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  logindata:Login = {
    username: '',
    password: ''
  }

  constructor(private router: Router,private registerService: RegisterService) { }

  ngOnInit(): void {
  }


  login(){
  

    localStorage.setItem('username',"aaa")
    this.router.navigate([''])
    .then(() => {
      window.location.reload();
    });
    
  }

}
