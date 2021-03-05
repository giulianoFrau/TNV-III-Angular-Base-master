import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfacciaPoi } from '../models/data.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = 'http://localhost:3000/data';

  constructor( private http : HttpClient) { }

  getData () {
    return this.http.get<Array<InterfacciaPoi>>(this.baseURL)
  }

  getEntry( id ) {
    return this.http.get<InterfacciaPoi>(this.baseURL + "/" + id)
  }

  addEntry = (data: InterfacciaPoi) => {
    return this.http.post<InterfacciaPoi>(this.baseURL, {
      "latitudine": data.latitudine,
      "longitudine": data.longitudine,
      "nomePoi": data.nomePoi,
      "tipoPoi": data.tipoPoi,
      "ingresso": data.ingresso,
      "valutazione": data.valutazione
    });
  };

  deleteEntry( id ){
    return this.http.delete(this.baseURL + "/" + id)
  }

  editEntry = (data: InterfacciaPoi) => {
    return this.http.put(this.baseURL + '/' + data.id, {
      "id": data.id,
      "latitudine": data.latitudine,
      "longitudine": data.longitudine,
      "nomePoi": data.nomePoi,
      "tipoPoi": data.tipoPoi,
      "ingresso": data.ingresso,
      "valutazione": data.valutazione,
    });
  };

}
