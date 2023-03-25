import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit, OnChanges, DoCheck, OnDestroy{

  constructor(private servicio:EventosService){}

  ngOnInit(){
    this.servicio.getEventos().subscribe(
      eventosVienenServidor => this.evento = eventosVienenServidor
    );
  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
  search = '';
  desplegable = '';
  fondoRojo = false;
  fondoAzul = false;


  evento: IEvent[] = [];

  orderPrice() {
    this.search = '';
    this.evento.sort(function (precio1, precio2) {
      return +precio1.price - +precio2.price;
    });
  }

  orderDate() {
    this.search = '';
    this.evento.sort((fecha1, fecha2)=>fecha1.date.getMilliseconds() - fecha2.date.getMilliseconds());
  }


  colorFondo() {
    if (this.desplegable != '') {
      if (this.desplegable == 'rojo') {
        this.fondoAzul = false;
        this.fondoRojo = true;
      } else {
        this.fondoAzul = true;
        this.fondoRojo = false;
      }
    } else {
      this.fondoAzul = false;
      this.fondoRojo = false;
    }
  }

  deleteEvento(event:IEvent){
    this.evento=this.evento.filter(ev=>ev!=event);
  }

  anyadirEvento(eventoNuevo:IEvent){

    this.evento.push(eventoNuevo);
  }

}
