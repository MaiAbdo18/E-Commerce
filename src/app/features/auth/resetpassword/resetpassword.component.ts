import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  imports: [ReactiveFormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent {

  private router = inject(Router)

  private authService : AuthService = inject(AuthService)

  resetPasswordForm : FormGroup = new FormGroup ({
    email :new FormControl(null, [Validators.required ,Validators.email]) ,
    newPassword : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,10}$/)])

})


resetPasswordSubmit():void
{
  this.authService.resetPassword(this.resetPasswordForm.value).subscribe({
    next : (res) => {

      localStorage.setItem('userToken' , res.token)
      this.authService.saveData()
       

          this.router.navigate(['/home'])
       
    },
    error : (err)=>{
     console.log(err);
     
    }
  })
}

}
