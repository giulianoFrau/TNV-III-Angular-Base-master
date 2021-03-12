import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCountry, ApiCountryList } from '../models/apicountry.model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private baseUrl = 'https://corona-api.com/';
  constructor(private http: HttpClient) {
  }

  /* metodo che viene richiamato nella pagina di dettaglio di un POI situato in una determinata nazione per ottenere i dati COVID */
  getDataByPaeseCode(code): Promise<ApiCountry> {
    return this.http.get<ApiCountry>(this.baseUrl + '/countries/' + code).toPromise();
  }

  /* metodo che viene richiamato nella pagina di api dei dati covid mondiali  per farci vedere la tabella mondiale relativa ai dati COVID*/
  getPaese() {
    return this.http.get<ApiCountryList>(this.baseUrl + '/countries');
  }
}
