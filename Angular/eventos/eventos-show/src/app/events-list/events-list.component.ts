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

  orderPrice(event:Event){
    event.preventDefault();
    this.search = '';
    this.evento.sort(function (precio1, precio2) {
      return +precio1.precio - +precio2.precio;
    });
  }

  orderDate(event:Event) {
    event.preventDefault();
    this.search = '';
    this.evento.sort((fecha1, fecha2)=>new Date (fecha1.fecha).getDate() - new Date (fecha2.fecha).getDate());
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
