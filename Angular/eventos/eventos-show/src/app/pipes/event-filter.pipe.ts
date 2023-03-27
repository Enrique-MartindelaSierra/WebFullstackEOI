import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: IEvent[], filtro: string): IEvent[] {
    const filtroDef=filtro? filtro.toLowerCase():null;

    if(filtroDef) {
      return eventos.filter(e=>
      e.nombre.toLocaleLowerCase()
        .includes(filtroDef.toLocaleLowerCase())||
      e.descripcion.toLocaleLowerCase()
        .includes(filtroDef.toLocaleLowerCase())
      );
    }else{
      return eventos;
    }
  }

}
