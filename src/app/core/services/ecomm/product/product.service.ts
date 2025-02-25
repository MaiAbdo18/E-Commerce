import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http :HttpClient = inject(HttpClient)

  constructor() { }


  getAllProducts() :Observable<any>
  {
    return this.http.get(`${Env.baseURL}/api/v1/products`)

  }
  getSpecificProducts(pId:string) :Observable<any>
  {
    return this.http.get(`${Env.baseURL}/api/v1/products/${pId}`)

  }
}
