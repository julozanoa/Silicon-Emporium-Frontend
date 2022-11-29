import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  user!:FormGroup;
  login!:Login

  constructor(private router: Router,private registerService: RegisterService,private fb: FormBuilder,   public dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.initForm();
  }


  initForm():FormGroup{
    return this.fb.group({
       username:['',[Validators.required,Validators.minLength(5)]],
       password:['',[Validators.required,Validators.minLength(5)]]
     });
   }
 

   
  onSubmit():void{
    this.login = this.user.value
    this.registerService.recoverpassword(this.login).subscribe(  res =>{
      window.alert(["contraseña restablecida"])
      this.router.navigate(['/login']).then(() => {
        window.location.reload();})  
  },
  err => {
      window.alert(["Usuario no encontrado"])
  })
  }

}
