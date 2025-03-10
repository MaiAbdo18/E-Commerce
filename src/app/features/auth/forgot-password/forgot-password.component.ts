import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  private authService = inject(AuthService)
  private router = inject(Router)


  forgetForm : FormGroup = new FormGroup ({
    email :new FormControl(null, [Validators.required ,Validators.email]) ,
})

forgetSubmit(): void
{
  this.authService.forgetPassword(this.forgetForm.value).subscribe({
     next : (res) => {
       if(res.statusMsg === 'success'){ 
        console.log(res.statusMsg );
         
        this.router.navigate(['/verify-code'])
       }

     },
     error : (err)=>{
      console.log(err);
      
     }
  })
}

}
