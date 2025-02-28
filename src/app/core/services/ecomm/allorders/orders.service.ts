import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private http = inject(HttpClient) ;

  constructor() { }

  checkout(): Observable<any>
{
  this.http.post(`${Env.baseURL}/api/v1/orders/checkout-session/67b210df429eb834606c7a30?url=http://localhost:3000`)

}
}
