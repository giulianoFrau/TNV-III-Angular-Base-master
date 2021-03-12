import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaesiService {
  baseUrl: string

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://restcountries.eu/rest/v2/all';
  }

  /* metodo che viene richiamato nella pagina di dettaglio di un POI situato in una determinata nazione per ottenere nel
     marker delle info generali relative a quella determinata nazione */
  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }
}

