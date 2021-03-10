import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { searchCountry } from '../models/searchcountry.model';

@Injectable()
export class SearchService {


  constructor(private http: HttpClient) {
   
  }

  getCountries(): Observable<any>{
  return this.http.get("https://restcountries.eu/rest/v2/all");
  
  }
  

  
  }

 

 

