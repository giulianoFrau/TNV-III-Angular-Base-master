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
  rischio: string;
  name: string;
  code: any;



  ngOnInit(): void {
    this.apiService.getPaese().subscribe((response: ApiCountryList) => {
      this.dataArray = response.data;
       this.checkRischio();
      
    },
      err => console.log(err),
      () => console.log("done loading countries",)
    )
  }
  
    checkRischio(){
      for(let i=0;i<this.dataArray.length;i++){
        if(this.dataArray[i].latest_data.deaths>1000){
          this.rischio="alto";
          
        }else{
          this.rischio="basso";
        }
      }
    }

  Search() {

    this.dataArray = this.dataArray.filter(res => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());

    })
  }
}


