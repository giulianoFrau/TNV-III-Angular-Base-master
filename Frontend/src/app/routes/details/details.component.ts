import { InterfacciaPoi } from 'src/app/models/data.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { PaesiService } from '../../services/paesi.service';





@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  latitudine: number;
  longitudine: number;
  zoom: number;
  mapTypeId: string;



  constructor(private route: ActivatedRoute, private dataService: DataService,
    private router: Router,private paesiService: PaesiService) {
    this.zoom = 5;
    this.mapTypeId = 'hybrid';
  }

  dataEntry: InterfacciaPoi;
  id: number;
  paesi:any[];
  nomePaese:string;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.fetchEntry()


  }

  fetchEntry() {
    this.dataService.getEntry(this.id).subscribe((res: any) => {
      this.dataEntry = res;
      this.latitudine = this.dataEntry.latitudine;
      this.longitudine = this.dataEntry.longitudine;
      this.nomePaese=" ";
   



      this.paesiService.getAll()
      .then(paesi =>{  
        this.paesi=paesi
        this.setNomePaese()

      }) 
      .catch(errore => console.log(errore))

     
    })


  }

  delete() {
    this.dataService.deleteEntry(this.id)
      .subscribe(data => {
        this.router.navigate(['/dashboard']);
        console.log("deleted: ", data);
      }, (err) => {
        console.log(err);
        this.router.navigate(['/dashboard']);
      });
  }



 setNomePaese(){
    for(let i=0;i<this.paesi.length;i++){
      console.log(this.latitudine,this.longitudine,this.paesi[i].latlng[0],this.paesi[i].latlng[1],this.paesi[i].name)
      if((this.latitudine|0 )===this.paesi[i].latlng[0] && (this.longitudine|0) ===this.paesi[i].latlng[1]){
      
        this.nomePaese=this.paesi[i].name;
        
      }
    }
  
 }

}




