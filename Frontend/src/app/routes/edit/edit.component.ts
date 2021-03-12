import { InterfacciaPoi } from './../../models/data.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dataEntry: InterfacciaPoi;
  ingresso = ["Libero", "A pagamento", " Offerta"]
  valutazione = ["Mai piu", "Passabile", "Discreto", "Bello", "Indimenticabile"];

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fetchEntry(id);
  }

  fetchEntry(id) {
    this.dataService.getEntry(id).subscribe((res: any) => {
      this.dataEntry = res;
    })
  }

  onSubmit() {
    this.dataService.editEntry(this.dataEntry)
      .subscribe(response => {
        this.router.navigate(['/details', this.dataEntry.id])
      }), err => {
        console.log(err);
      }
    this.router.navigate(['/details', this.dataEntry.id])
  }
}
