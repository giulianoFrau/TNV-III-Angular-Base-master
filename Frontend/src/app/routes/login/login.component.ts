import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

import { Utente } from '../../models/utente.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  nomeUtente: string;
  password: string;
  arrayUtenti: Utente[];
  checkLogin=false;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    console.log(this.loginService.checkIsLogged());
    if (this.loginService.checkIsLogged()) {
      this.router.navigateByUrl('/homepage');
    }
  }

  login() {
    let checkLogin = this.loginService.checkUser(this.nomeUtente, this.password);
    if (checkLogin) {
      this.router.navigate(['/homepage']);
    } else {
      alert("Inserisci credenziali corrette oppure registrati");
    }
  }
}
