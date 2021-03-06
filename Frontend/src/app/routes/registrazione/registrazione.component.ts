import { Component, OnInit } from '@angular/core';
import { Utente } from '../../models/utente.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
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
    //this.currentuser.userName = this.userName;
    //this.currentuser.pwd = this.pwd
    this.utenteCorrente = { nomeUtente: this.nomeUtente, password: this.password }
    this.loginService.addUser(this.utenteCorrente);
    console.log(this.utenteCorrente,this.loginService.arrayUtenti);
    this.router.navigate(['/login']);
  }
}
