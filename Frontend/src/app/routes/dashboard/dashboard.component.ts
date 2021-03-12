import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { InterfacciaPoi } from 'src/app/models/data.model';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  interfacciaPoiLoader = false;
  public arrayInterfacciaPoi: InterfacciaPoi[];

  constructor(private dataService: DataService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getEntries()
  }

  getEntries() {
    this.dataService.getData().subscribe((response: any) => {
      this.arrayInterfacciaPoi = response;
      this.interfacciaPoiLoader = true;
    })
  }

  goToDetails(id) {
    this.router.navigateByUrl('/details/' + id);
  }
}
