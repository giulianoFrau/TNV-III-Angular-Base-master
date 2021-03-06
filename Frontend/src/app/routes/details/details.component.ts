import { InterfacciaPoi } from 'src/app/models/data.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { PaesiService } from '../../services/paesi.service';
import { ApiserviceService } from '../../services/apiservice.service';
import { ApiCountryData } from '../../models/apicountry.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  zoom: number;
  mapTypeId: string;
  latitudine: number;
  longitudine: number;
  dataEntry: InterfacciaPoi;
  id: number;
  paesi: any[];
  nomePaese: string;
  regione: string;
  popolazione: string;
  capitale: string;
  morti: number;
  covid: ApiCountryData;
  code: any;
  nazione: string;
  totAbitanti: number;
  totCasi: number;
  tassoMortalita: number;
  casiAbitanti: number;
  aggiornamento: Date;
  rischio: string;
  gradoRischio=3;
  

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private paesiService: PaesiService,
    private coronaService: ApiserviceService
  ) {
    this.zoom = 6;
    this.mapTypeId = 'hybrid';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry();
  }

  fetchEntry() {  //prende i dati inseriti dall'utente e va a incrociare la lat e la long nella nazione del POI stesso
    this.dataService.getEntry(this.id).subscribe((res: any) => {
      this.dataEntry = res;
      this.latitudine = this.dataEntry.latitudine;
      this.longitudine = this.dataEntry.longitudine;
      this.paesiService
        .getAll()
        .then((paesi) => {
          this.paesi = paesi;
          this.setNomePaese();  //viene richiamato il metodo per i dettagli del marker
          this.fetchCovid();  //viene richiamata la seconda chiamata utile per incrociare i dati covid con quelli di quella determinata nazione
        })
        .catch((errore) => console.log(errore));
    }
    );
  }

  fetchCovid() {  //metodo che permette di ottenere i dati covid di una determinata nazione
    this.coronaService.getDataByPaeseCode(this.code)
      .then((response) => {
        this.covid = response.data;
        this.setCovid();
      })
      .catch((errore) => console.log(errore));
  }

  delete() {
    this.dataService.deleteEntry(this.id).subscribe(
      (data) => {
        this.router.navigate(['/dashboard']);
        console.log('deleted: ', data);
      },
      (err) => {
        console.log(err);
        this.router.navigate(['/dashboard']);
      }
    );
  }

  setNomePaese() {  // fa vedere i dettagli della nazione in cui si trova il  POI (nel marker)
    for (let i = 0; i < this.paesi.length; i++) {
      if ((this.latitudine | 0) === (this.paesi[i].latlng[0] | 0) &&
        (this.longitudine | 0) === (this.paesi[i].latlng[1] | 0)
      ) {
        this.nomePaese = this.paesi[i].name;
        this.capitale = this.paesi[i].capital;
        this.popolazione = this.paesi[i].population;
        this.regione = this.paesi[i].region;
        this.code = this.paesi[i].alpha2Code;
      }
    }
  }

  setCovid() { // fa vedere i dettagli COVID della nazione in cui si trova il  POI
    this.nazione = this.covid.name;
    this.morti = this.covid.latest_data.deaths;
    this.totCasi = this.covid.latest_data.confirmed;
    this.tassoMortalita = this.covid.latest_data.calculated.death_rate;
    this.casiAbitanti = this.covid.latest_data.calculated.cases_per_million_population;
    this.aggiornamento = this.covid.updated_at;
    if (this.tassoMortalita > this.gradoRischio) {
      this.rischio = "Rischio alto"
    } else {
      this.rischio = "Rischio basso"
    }
  }
}
