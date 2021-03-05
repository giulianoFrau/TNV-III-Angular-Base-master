import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { InterfacciaPoi } from 'src/app/models/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  interfacciaPoiLoader=false;
  constructor( private dataService: DataService, private router : Router) { }

  ngOnInit(): void {
    this.getEntries()
  }

  public arrayInterfacciaPoi: InterfacciaPoi [];
  countries;

  getEntries(){
    this.dataService.getData().subscribe( (response : any) => {
      this.arrayInterfacciaPoi = response;
      this.interfacciaPoiLoader=true;
    })
    
    
  }

  goToDetails(id){
    this.router.navigateByUrl('/details/' + id);
  }

  

}
