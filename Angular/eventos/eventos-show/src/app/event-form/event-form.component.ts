import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../interfaces/i-event';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit{

newEvent!: IEvent;


ngOnInit():void{
  this.inicializarEvento();
}
  inicializarEvento(){
    this.newEvent ={
      id: 0,
      nombre: '',
      imagen: undefined,
      fecha: new Date('0000-00-00'),
      descripcion: '',
      precio: 0,
    }

  }



  //@Output() eventoNuevo = new EventEmitter<IEvent>();

  constructor(private servicio:EventosService
    ,private router: Router
    ){}

  addEvent() {

    this.servicio.postEventos(this.newEvent).subscribe(
      eventoAñadido=> this.newEvent = eventoAñadido
    )
    //this.eventoNuevo.emit(this.newEvent);
    this.inicializarEvento();
    this.router.navigate(["/eventos"]);
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvent.imagen = reader.result as string;
    });
  }

}
