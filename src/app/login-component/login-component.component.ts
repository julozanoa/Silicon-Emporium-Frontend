
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { Login } from '../Model';
import { RegisterService } from '../Services/register.service';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  user!:FormGroup;
  login!:Login
  constructor(private router: Router,private registerService: RegisterService,private fb: FormBuilder) { }



  ngOnInit(): void {
    this.user = this.initForm();
  
  }






  onSubmit():void{
    this.login = this.user.value
    this.registerService.login(this.login).subscribe(  res =>{
      localStorage.setItem('username',this.login.username)
      this.router.navigate(['']).then(() => {
        window.location.reload();})
      
  },
  err => {
      window.alert(["Usuario o Contraseña incorrecta"])
  })
  }

  initForm():FormGroup{
   return this.fb.group({
      username:['',[Validators.required,Validators.minLength(5)]],
      password:['',[Validators.required,Validators.minLength(5)]]
    });
  }


  
}
