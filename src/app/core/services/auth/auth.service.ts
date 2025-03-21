import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { PlatformService } from './../platform/platform.service';
import { Env } from '../../Environment/Environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)
  private PlatformService = inject(PlatformService)
  userData : BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { 
    if(this.PlatformService.checkplatformId())
    {
      if(localStorage.getItem('userToken'))
      {
        this.getUserData()

      }
    }
  }

  sendRegistertoAPI(data:object):Observable<any>
 {
   return this.http.post( `${Env.baseURL}/api/v1/auth/signup`, data) 
 }
  sendLogintoAPI(data:object):Observable<any>
  {
    return this.http.post(`${Env.baseURL}/api/v1/auth/signin` , data) 
  }

  saveData()
  {
    this.userData.next(jwtDecode(JSON.stringify(localStorage.getItem('userToken')))) 

  }


  getUserData()
  {
    this.userData.next(jwtDecode( JSON.stringify(localStorage.getItem('userToken'))))
  }

  forgetPassword(data:object):Observable<any>
  {
    return this.http.post(`${Env.baseURL}/api/v1/auth/forgotPasswords`, data)
  }

  resetCode(data:object):Observable<any>{
    return this.http.post(`${Env.baseURL}/api/v1/auth/verifyResetCode`, data)
  }

  resetPassword(data:object):Observable<any>{
    return this.http.put(`${Env.baseURL}/api/v1/auth/resetPassword`, data)
  }

  

}



