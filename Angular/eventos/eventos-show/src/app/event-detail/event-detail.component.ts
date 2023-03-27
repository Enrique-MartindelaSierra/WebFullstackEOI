import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from '../interfaces/i-event';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private servicio:EventosService,
    private router:Router) { }

eventD!:IEvent;
    ngOnInit() {
        const id = +this.route.snapshot.params['id'];
        this.servicio.getEvento(id)
        .subscribe({
        next:(ev) => (this.eventD = ev),
        error:e => console.error(e)}
        );
    }

  goBack(){
    this.router.navigate(["/eventos"]);
  }

}
