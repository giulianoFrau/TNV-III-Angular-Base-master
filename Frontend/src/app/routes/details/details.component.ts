import { InterfacciaPoi } from 'src/app/models/data.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  latitudine:number;
  longitudine: number;
  zoom:number;
  mapTypeId:string;

  constructor(private route: ActivatedRoute, private dataService: DataService, 
    private router : Router ) {  
      
      this.zoom=5;
      this.mapTypeId='hybrid';}

  dataEntry: InterfacciaPoi;
  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry()
  }

  fetchEntry(){
    this.dataService.getEntry(this.id).subscribe( (res: any ) => {
   
      this.dataEntry = res;
      this.latitudine= this.dataEntry.latitudine;
      this.longitudine=this.dataEntry.longitudine;
    })
  }

  delete(){
    this.dataService.deleteEntry(this.id)
    .subscribe(data => {
      this.router.navigate(['/dashboard']);
      console.log("deleted: ", data);
    }, (err) => {
      console.log(err);
      this.router.navigate(['/dashboard']);
    });
    

  }
}
