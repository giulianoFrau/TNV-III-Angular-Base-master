import { Component, OnInit } from '@angular/core';
import { Utente } from '../../models/utente.model';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  nomeUtente: string;
  password: string;
  utenteCorrente: Utente;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  addUsers() {
    //this.currentuser.userName = this.userName; //alternativa
    //this.currentuser.pwd = this.pwd //alternativa
    this.utenteCorrente = { nomeUtente: this.nomeUtente, password: this.password }
    this.loginService.addUser(this.utenteCorrente);
    this.router.navigate(['/login']);
  }
}
