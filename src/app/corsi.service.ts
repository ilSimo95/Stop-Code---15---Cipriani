import { Injectable } from '@angular/core';
import { Contatto, Corso, Message } from './interfaces';
import { corsi } from './data';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {

  constructor(
    private route: ActivatedRoute,
    private http:HttpClient) { }

  corsiTOT:Corso[] = [];

  getCorsi():Corso[] {
    for (const c of corsi) {
      this.corsiTOT.push(c);
    }
    return this.corsiTOT;
  }

  getID():number {
    return this.route.snapshot.params["id"];
  }

  sendContact(compiledForm:Contatto): Observable<Message> {
    return this.http.post<Message>("http://l4com.labforweb.it/backend/web/test/ajax/12-01/modulo_contatti.php", compiledForm);
  }

}
