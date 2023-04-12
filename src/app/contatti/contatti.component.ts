import { Component } from '@angular/core';
import { Contatto } from '../interfaces';
import { Router } from '@angular/router';
import { CorsiService } from '../corsi.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

  model:Contatto = {
    nome: "",
    email: "",
    telefono: 0,
    messaggio: ""
  }

  constructor(private router: Router,
              private generalService:CorsiService) {}

  send():void {
    this.generalService.sendContact(this.model).subscribe(contact => {
      console.log(contact);
      console.log(this.model);
      this.router.navigate([""]);
  })}
}
