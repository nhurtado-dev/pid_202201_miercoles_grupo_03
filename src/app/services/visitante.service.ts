import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitante } from '../models/visitante.model';

// Controlador Visitante
const baseUrl = 'http://localhost:8055/rest/visitante'

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private http:HttpClient) { }


  create(data:Visitante):Observable<any>{
    return this.http.post(baseUrl, data);
  }

}
