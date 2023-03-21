import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root'
})
export class EventosService {


  private eventURL = 'http://curso.i234.me:8080/eventos';

  constructor(private http: HttpClient) { }

  getEventos(): Observable<IEvent[]> {
  return this.http.get<{eventos: IEvent[], ok: boolean, error?: string}>(this.eventURL)
  .pipe(map(response => response.eventos))
 }

    /* return [
    {
      title: 'Minecon',
      image: 'assets/MINECON-Live-Logo-Wire-2.png',
      date: new Date('2023-08-22'),
      description: 'lo del maincra',
      price: 30,
    },
    {
      title: 'esa cosa',
      image: 'assets/Vortice.webp',
      date: new Date('2024-03-30'),
      description: 'ya tu sabeh',
      price: 5,
    },
    ]*/
  }



