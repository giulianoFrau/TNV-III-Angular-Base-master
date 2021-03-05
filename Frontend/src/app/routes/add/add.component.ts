import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { InterfacciaPoi } from '../../models/data.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    
  }

  dataEntry : InterfacciaPoi

  tipoPoi = ["Spiaggia", "Monumento", "Museo", "Stadio", "Belvedere", "Altro"]
  ingresso = ["Accesso gratuito", "A pagamento"]
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
