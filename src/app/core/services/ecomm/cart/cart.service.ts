import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Env } from '../../../Environment/Environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private http = inject(HttpClient)
  private userHeaders:any = {token : localStorage.getItem('userToken')}
  constructor() { }

  addToCartAPI(pId:string):Observable<any>
  {

    return this.http.post( `${Env.baseURL}/api/v1/cart` , {productId : pId} , {
      headers : this.userHeaders
    })
  }
  updateCartAPI(pId:string , pCount:number):Observable<any>
  {

    return this.http.put( `${Env.baseURL}/api/v1/cart/${pId}` , {count : pCount} , {
      headers : this.userHeaders
    })
  }
  getCartAPI():Observable<any>
  {

    return this.http.get( `${Env.baseURL}/api/v1/cart`, {
      headers : this.userHeaders
    })
  }
  deleteCartAPI(pId:string):Observable<any>
  {

    return this.http.delete( `${Env.baseURL}/api/v1/cart/${pId}`, {
      headers : this.userHeaders
    })
  }
  clearCartAPI():Observable<any>
  {

    return this.http.delete( `${Env.baseURL}/api/v1/cart`, {
      headers : this.userHeaders
    })
  }
}
