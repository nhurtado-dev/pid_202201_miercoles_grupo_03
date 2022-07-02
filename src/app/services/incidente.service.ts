import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incidente } from '../models/incidente.model';

// Controlador Visita
const baseUrl = 'http://localhost:8055/rest/incidente'

@Injectable({
  providedIn: 'root'
})
export class IncidenteService {

  constructor(private http:HttpClient) { }


  listaIncidente():Observable<Incidente[]>{
    return this.http.get<Incidente[]>(baseUrl);
  }

  listaIncidenteConFiltro(codedificio:number, coddepartamento:number, estado:number, codcausas:number){
    const params = new HttpParams().set("codedificio",codedificio).set("coddepartamento",coddepartamento).set("estado",estado).set("codcausas",codcausas);
    return this.http.get<any>(baseUrl + "/listaIncidenteConParametros", {params});
  }

  registrar(data:Incidente):Observable<any>{
    return this.http.post(baseUrl, data);
  }

  actualizar(data:Incidente):Observable<any>{
    return this.http.put(baseUrl, data);
  }

}
