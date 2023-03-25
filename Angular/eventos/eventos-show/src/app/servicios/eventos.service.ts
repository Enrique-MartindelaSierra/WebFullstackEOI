import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root'
})
export class EventosService {


  private eventURL = 'eventos';

  constructor(private http: HttpClient) { }

  getEventos(): Observable<IEvent[]> {
  return this.http.get<{eventos: IEvent[], ok: boolean, error?: string}>(this.eventURL)
  .pipe(map(response => response.eventos))
 }

  postEventos(evento:IEvent): Observable<IEvent> {
  return this.http.post<{evento: IEvent, ok: boolean, error?: string}>(this.eventURL,evento)
  .pipe(
    catchError(((resp: HttpErrorResponse) => throwError(
      "Error insertando producto!. Código de servidor: "+resp.status+
      "Mensaje: "+  resp.message)

  )),
 map(resp => {
    if (!resp.ok) { throw resp.error; }
    return resp.evento;
    }));
 }

 deleteEventos(id:number): Observable<number>{
  return this.http.delete<{evento:number}>(this.eventURL+"/"+ id)
  .pipe(map(response => response.evento))
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



