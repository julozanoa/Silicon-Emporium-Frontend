import { Component, OnInit } from '@angular/core';
import { User } from '../Model';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit {

  user: User = {
    username: '',
    password: '',
    name: '',
    surname: ''
  }
  
  password!:string;

  constructor( private registerService: RegisterService) { }

  ngOnInit(): void {
  
  }

  createUser(){
    console.log(this.user)
  }

 
  passwordComprobation():boolean{
  if(this.mailComprobation() == true){
    if(this.user.password != this.password){
      window.alert("Las Contraseñas no son iguales")
      return true;
    } else {
      console.log(this.user)
      return false;
    }
  } else{
    return false;
  }
  }

  mailComprobation():boolean{
    if( this.user.username.match("@") == null){
      window.alert("Ingrese un correo Valido")
      return false
    } else{
      return true
    }
  }

}
