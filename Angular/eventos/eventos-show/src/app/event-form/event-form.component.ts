import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

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
      title: '',
      image: '',
      date: new Date('0000-00-00'),
      description: '',
      price: 0,
    }

  }



  @Output() eventoNuevo = new EventEmitter<IEvent>();


  addEvent() {
    this.eventoNuevo.emit(this.newEvent);
    this.inicializarEvento();
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvent.image = reader.result as string;
    });
  }

}
