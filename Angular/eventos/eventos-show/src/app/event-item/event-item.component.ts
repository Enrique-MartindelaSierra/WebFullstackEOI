import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

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

  deleteEvent(){
    this.borrarEvento.emit()
  }
}
