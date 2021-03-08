import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCountry, ApiCountryList } from '../models/apicountry.model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  private baseUrl = 'https://corona-api.com/';
  constructor(private http:HttpClient) { 
  }

  /* metodo creato da me per la visualizzazione sulla entry corrente*/
  getCountries():Promise<ApiCountryList>{
    return this.http.get<ApiCountryList>(this.baseUrl+'/countries').toPromise();
  }

  getDataByPaeseCode(code):Promise<ApiCountry>{
    return this.http.get<ApiCountry> (this.baseUrl+'/countries/'+ code).toPromise();
  }

/*metodi esistenti api component*/
  getPaese(){
    return this.http.get<ApiCountryList>(this.baseUrl+'/countries');
  }

  getAfghanistanData(){
    return this.http.get<ApiCountry>(this.baseUrl+'/countries'+'/AF');
  }

}
