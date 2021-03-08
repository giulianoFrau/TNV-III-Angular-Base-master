import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { ApiCountry, ApiCountryList, ApiCountryData } from '../../models/apicountry.model';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private apiService: ApiserviceService) { }
  dataArray:ApiCountryData[];
  afghanistanData;
  afghanistanDataArray : Array<ApiCountry>=[];

  ngOnInit(): void {
  }

  getCountries(){
    this.apiService.getPaese().subscribe((response: ApiCountryList) =>
      {
        this.dataArray= response.data;
      },
      err => console.log(err),
      () => console.log("done loading countries",)
    )
  }

  getAfghanistan(){
    this.apiService.getAfghanistanData().subscribe((data: ApiCountry) =>{
      this.afghanistanData = data,
      this.afghanistanDataArray.push(this.afghanistanData)
    },
      err => console.log(err),
      () => console.log("done loading countries", this.afghanistanData)
    )
  }

}
