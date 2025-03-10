import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private http = inject(HttpClient) ;
  private userHeaders:any = {token : localStorage.getItem('userToken')} ;

  constructor() { }

  checkout(cartId:string , addressFormValue:object ): Observable<any>
{
  return this.http.post(`${Env.baseURL}/api/v1/orders/checkout-session/${cartId}?url=${Env.ecommlURL}` , {shippingAddress:addressFormValue})

}
}
