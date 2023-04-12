import { Component, OnInit } from '@angular/core';
import { CorsiService } from '../corsi.service';
import { Corso } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  corsi?:Corso[];

  constructor(private corsiService:CorsiService) {}
  
  ngOnInit(): void {
    this.corsi = this.corsiService.getCorsi();
    console.log(this.corsi);
  }

}
