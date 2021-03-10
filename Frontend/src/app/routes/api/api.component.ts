import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { ApiCountry, ApiCountryList, ApiCountryData, LatestData } from '../../models/apicountry.model';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private apiService: ApiserviceService) { }
  dataArray: ApiCountryData[];
  name: string;

  ngOnInit(): void {
    this.apiService.getPaese().subscribe((response: ApiCountryList) => {
      this.dataArray = response.data;
    },
      err => console.log(err),
      () => console.log("done loading countries",)
    )
  }
  


  Search() {

    this.dataArray = this.dataArray.filter(res => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());

    })
  }
}


