import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Model';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit {

  
  constructor( private registerService: RegisterService,private fb: FormBuilder,private router: Router) { }

  register!:FormGroup;
  user!:User

  ngOnInit(): void {
  this.register = this.initForm();
  }

  initForm():FormGroup{
    return this.fb.group({
       username:['',[Validators.required,Validators.minLength(5)]],
       password:['',[Validators.required,Validators.minLength(5)]],
       names:['',[Validators.required,Validators.minLength(5)]],
       surnames:['',[Validators.required,Validators.minLength(5)]]
     });
   }

 
   onSubmit():void{
    this.user = this.register.value
    this.registerService.create(this.user).subscribe(  res =>{
        window.alert("Usuario Registrado")
        this.router.navigate(['']).then(() => {
          window.location.reload();})
      
  },
  err => {
      window.alert(["Usuario ya registrado"])
  })
  }
 }

