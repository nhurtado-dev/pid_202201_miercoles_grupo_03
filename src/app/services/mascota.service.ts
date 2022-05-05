import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascotas } from '../models/mascotas.model';

// Controlador Mascota
const baseUrl = 'http://localhost:8055/rest/mascota'

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient) { }


  create(data:Mascotas):Observable<any>{
    return this.http.post(baseUrl, data);
  }

}
