import { Component, OnInit } from '@angular/core';
import { CorsiService } from '../corsi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corsi-detail',
  templateUrl: './corsi-detail.component.html',
  styleUrls: ['./corsi-detail.component.css']
})
export class CorsiDetailComponent implements OnInit {
  id?:number;
  sub?:any;

  constructor(private corsiService:CorsiService,
              private route:ActivatedRoute ) {}

  ngOnInit(): void {
    this.id = this.getID();
  }

  getID():number {
    return Number(this.route.snapshot.paramMap.get("id")); 
    // METODO 2 --> return this.route.snapshot.params["id"];
    // METODO 3 --> this.sub = this.route.params.subscribe({next: params => {this.id=params['id']}}); return this.id; }
  }
}
