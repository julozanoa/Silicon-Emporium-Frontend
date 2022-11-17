import { Component, OnInit } from '@angular/core';
import { User } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  username!:any;

  ngOnInit(): void {
   this.comprobationLogin()
   console.log(this.username);
  }


  comprobationLogin(){
    this.username = localStorage.getItem('username')
  }

  logout(){
    localStorage.clear();
    this.ngOnInit()
  }


  title = 'angularproyecto';
}


