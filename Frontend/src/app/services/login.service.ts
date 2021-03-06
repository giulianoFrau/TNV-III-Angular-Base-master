import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  admin:Utente={nomeUtente:"admin",password:"admin"};
  isLogged=false;
  arrayUtenti:Utente[] =[this.admin];
  
  constructor( ) { }
  
  addUser(utente: Utente){
    this.arrayUtenti.push(utente);
  }

  checkIsLogged(){
    return this.isLogged;
  }

  checkUser( nomeUtente:string, password:string ){
    for(let i=0;i<this.arrayUtenti.length;i++){
      if(nomeUtente === this.arrayUtenti[i].nomeUtente && password === this.arrayUtenti[i].password){
        this.isLogged=true;
        return true;
      }
    }
    return false;
  }
}


