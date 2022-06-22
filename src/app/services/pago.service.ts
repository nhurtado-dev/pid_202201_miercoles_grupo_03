import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pago } from '../models/pago.model';

const baseUrl = 'http://localhost:8055/rest/pago';

const baseURL= "http://localhost:8055/rest/util/pago";

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http:HttpClient) { }

  RegistraPago(data:Pago):Observable<any>{
    return this.http.post(baseUrl, data);
  }
  listaPago():Observable<Pago[]>{
      return this.http.get<Pago[]>(baseURL);
  }
}
