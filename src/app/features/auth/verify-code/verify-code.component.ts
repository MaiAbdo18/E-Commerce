import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  imports: [ReactiveFormsModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

  private router = inject(Router)

  private authService = inject(AuthService)

  verifyCodeForm : FormGroup = new FormGroup ({

    resetCode :new FormControl(null, [Validators.required ,Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,10}$/)]) ,
})

verifyCodeSubmit(){
  this.authService.resetCode(this.verifyCodeForm.value).subscribe({
    next : (res) => {
       if(res.statusMsg === 'Success'){
          this.router.navigate(['/resetpassword'])
       }
    },
     error : (err)=>{
      console.log(err);
      
     }
  })
}
}



