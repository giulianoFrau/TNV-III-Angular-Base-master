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

  interfacciaCountry: searchCountry;
  searchCountry: searchCountry[];
  country: string;
  popolazione: Number;
  latitudine: number;
  longitudine: number;
  risultato: string;
  name: string;
  showResult = false;
  dataEntry: InterfacciaPoi;
  tipoPoi = ["Spiaggia", "Monumento", "Museo", "Stadio", "Belvedere", "Altro"];
  ingresso = ["Libero", "A pagamento", " Offerta"];
  valutazione = ["Mai piu", "Passabile", "Discreto", "Bello", "Indimenticabile"];
  indiceLista: number;

  constructor(private dataService: DataService, private router: Router,
    private SearchService: SearchService) { }

  ngOnInit() {
    /* metodo che  aiuta l'utente a trovare le coordinate 
       corrette relative alla nazione del suo POI*/
    this.SearchService.getCountries()
      .subscribe(
        data => {
          this.searchCountry = data;

        }
      )
  }


  Search() {
    if (this.name == "") {
      this.ngOnInit();
      this.showResult = false;

    } else {
      this.searchCountry = this.searchCountry.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
    if (this.name) {
      this.showResult = true;
    }
  }

  copiaLat(indiceLista) {
    this.latitudine = this.searchCountry[indiceLista].latlng[0];
    this.longitudine = this.searchCountry[indiceLista].latlng[1];
  }

  onSubmit(form: NgForm) {
    this.dataEntry = form.form.value;
    console.log(this.dataEntry);


    this.dataService.addEntry(this.dataEntry).subscribe(response => {
      console.log(response);
      this.router.navigate(['/dashboard']);
    })
  }
}
