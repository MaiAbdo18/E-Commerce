import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private http : HttpClient = inject(HttpClient)

  constructor() { }

  getAllBrands(): Observable<any>
  {
     return this.http.get(`${Env.baseURL}/api/v1/brands`)
  }

  
}
