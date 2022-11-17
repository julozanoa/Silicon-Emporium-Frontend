import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  username!:string;
  password!:string;
  window: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  login(){
    console.log(this.username)
    console.log(this.password)
    localStorage.setItem('username',this.username)
    this.router.navigate([''])
    .then(() => {
      window.location.reload();
    });
    
  }

}
