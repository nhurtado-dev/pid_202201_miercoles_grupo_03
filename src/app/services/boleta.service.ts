import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boleta } from '../models/boleta.model';

const baseUrl = 'http://localhost:8055/rest/boleta';

const baseURL= "http://localhost:8055/rest/util/boleta";

@Injectable({
  providedIn: 'root'
})
export class BoletaService {

  constructor(private http:HttpClient) { }

  listaBoletafiltro(nombre:string, dni:string):Observable<any>{
    const params = new HttpParams().set("nom", nombre).set("dni", dni);
    return this.http.get<any>(baseUrl + "/listaBoletaConParametros", {params});
  }
  RegistraBoleta(data:Boleta):Observable<any>{
    return this.http.post(baseUrl, data);
  }
  listaBoleta():Observable<Boleta[]>{
      return this.http.get<Boleta[]>(baseURL);
  }
  actualiza(data:Boleta):Observable<any>{
    return this.http.put(baseUrl, data);
  }
}
