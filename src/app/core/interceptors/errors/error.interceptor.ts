import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {


    let toastrService : ToastrService = inject(ToastrService) 

  return next(req).pipe(catchError( (err)=>{

   toastrService.error(err.error.message)  
   
   return throwError(()=> err)

  }))


};
