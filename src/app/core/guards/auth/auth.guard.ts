import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PlatformService } from '../../services/platform/platform.service';

export const authGuard: CanActivateFn = (route, state) => {

  let platform = inject(PlatformService)

  let router = inject(Router)



  if(platform.checkplatformId())
  {
    if(localStorage.getItem('userToken') != null)
      {
        return true ;
      }
  }
 
  
  router.navigate(['/login'])
  
  return false ;
  
};
