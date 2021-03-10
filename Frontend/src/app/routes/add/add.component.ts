import { searchCountry } from './../../models/searchcountry.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { InterfacciaPoi } from '../../models/data.model';

import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  interfacciaCountry:searchCountry;
  searchCountry:searchCountry[];
  country:string;
  popolazione:Number;
  latitudine: number;
  longitudine: number;
  risultato:string;
  name:string;
  showResult = false;

  
  constructor(private dataService: DataService, private router: Router,
    private SearchService:SearchService) { }

  ngOnInit() {
    this.SearchService.getCountries()
    .subscribe(
      data=>{
        this.searchCountry=data;
      }
    )
  }
  Search(){
    this.searchCountry = this.searchCountry.filter(res => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
  if(this.name){
    this.showResult = true;
  }
}

  dataEntry : InterfacciaPoi

  tipoPoi = ["Spiaggia", "Monumento", "Museo", "Stadio", "Belvedere", "Altro"]
  ingresso = ["Libero", "A pagamento"," Offerta"]
  valutazione = ["Mai piu", "Passabile" , "Discreto" , "Bello" , "Indimenticabile"]

  onSubmit(form : NgForm){
    this.dataEntry = form.form.value;
    //console.log(form)
    console.log(this.dataEntry);

    this.dataService.addEntry(this.dataEntry).subscribe(response => {
      console.log(response);
      this.router.navigate(['/dashboard']);
    },
    //(err) => {
      //fai qualcosa
    //}
    )
  }
 
}
