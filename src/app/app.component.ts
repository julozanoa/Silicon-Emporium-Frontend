import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  constructor(private router: Router) { }


  username!:any;

  ngOnInit(): void {
   this.comprobationLogin()
   console.log("Username:" + this.username);
  }


  comprobationLogin(){
    this.username = localStorage.getItem('username')
  }

  logout(){
    localStorage.clear();
    this.ngOnInit()
    this.router.navigate(['']).then(() => {
      window.location.reload();})
  }


  title = 'angularproyecto';
}


