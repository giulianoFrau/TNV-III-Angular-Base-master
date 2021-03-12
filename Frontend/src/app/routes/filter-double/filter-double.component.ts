import { InterfacciaPoi } from './../../models/data.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filter-double',
  templateUrl: './filter-double.component.html',
  styleUrls: ['./filter-double.component.css']
})
export class FilterDoubleComponent implements OnInit {

  arrayValutazioni = ["Mai piu", "Passabile", "Discreto", "Bello", "Indimenticabile"];
  nomePoi: string;
  valutazione: string;
  showResult = false;
  arrayInterfacciaPoi: InterfacciaPoi[]; //tutti i dati inseriti fino ad adesso

  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getEntries();
  }
/* metodo per filtrare un determinato POI in base al suo nome e al suo grado di apprezzamento */
  filterBy(form: NgForm) {
    this.nomePoi = form.form.value.nomePoi;
    this.valutazione = form.form.value.valutazione;
    if (this.nomePoi && this.valutazione) {
      this.showResult = true;
    }
  }

  getEntries() {
    this.dataService.getData().subscribe((response: any) => {
      this.arrayInterfacciaPoi = response;
    })
  }
}
