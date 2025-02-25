import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

private authService = inject(AuthService) ;
private router = inject(Router) ;

  
errorMessage : string = "" ;
isLoading : boolean = false ;


loginForm : FormGroup = new FormGroup({
  email : new FormControl(null , [Validators.required , Validators.email]),
  password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,10}$/)])
})
  AuthService: any;

loginSubmit()
{
  if(this.loginForm.valid)
  {
    this.isLoading = true 

    this.authService.sendLogintoAPI(this.loginForm.value).subscribe({
      next : (res)=>{

        if(res.message == "success")
        {
          localStorage.setItem('userToken' , res.token) ;

          this.authService.saveData() ;

          this.router.navigate(['/home']) ;
        }

        this.isLoading = false
      } ,

      error : (err)=>{
        this.errorMessage = err.error.message ;
        this.isLoading = false ;
      }
    })
  }

}

}
