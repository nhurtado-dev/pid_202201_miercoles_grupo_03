import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio.models';

const baseUrl = 'http://localhost:8055/rest/util'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  listaServicio():Observable<Servicio[]>{
    return this.http.get<Servicio[]>(baseUrl+'/servicio');
  }

}
