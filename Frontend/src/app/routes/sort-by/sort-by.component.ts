import { InterfacciaPoi } from './../../models/data.model';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../../services/data.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {

  arrayInterfacciaPoi : InterfacciaPoi[];
  showResult = false;
  sortOptions = ["nomePoi", "valutazione"]
  sortOption : string;
  orderedItems : InterfacciaPoi[];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(){
    this.dataService.getData().subscribe((response:any)=>{
      this.arrayInterfacciaPoi = response;
     
    })
  }

  sortBy(form : NgForm){
      this.sortOption = form.form.value.sort;
      this.showResult=true;
      this.orderedItems=this.arrayInterfacciaPoi.sort((a,b)=> a[this.sortOption] - 
      b[this.sortOption])
  }

}
