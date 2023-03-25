import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {

  @Input() event!:IEvent;
  @Input() fondoAzul!:boolean;
  @Input() fondoRojo!:boolean;

  @Output() borrarEvento=new EventEmitter<void>();

  constructor(private servicio:EventosService){}

  deleteEvent(){
    this.servicio.deleteEventos(<number>this.event.id).subscribe({
next:borrados=>{
  console.log("Filas eliminadas"+borrados);
  this.borrarEvento.emit()
},
error:error=> console.log(error)
});
  }
}
