import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Causas } from '../models/causas.model';

const baseURL= "http://localhost:8055/rest/util/causas";

@Injectable({
  providedIn: 'root'
})
export class CausasService {

  constructor(private http : HttpClient) { }

  listaCausas():Observable<Causas[]>{
    return this.http.get<Causas[]>(baseURL);
  }
}
