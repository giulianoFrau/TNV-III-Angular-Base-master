import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CovidData } from 'src/app/models/data.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService, 
    private router : Router) { }

  dataEntry: CovidData;
  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry()
  }

  fetchEntry(){
    this.dataService.getEntry(this.id).subscribe( (res: any ) => {
      this.dataEntry = res;
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
    //this.router.navigate(['/dashboard']);

  }
}
