import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  /* metodo che viene richiamato nella pagina di add per aiutare l'utente per trovare le coordinate 
  corrette relative alla nazione del suo POI*/
  getCountries(): Observable<any> {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }
}





