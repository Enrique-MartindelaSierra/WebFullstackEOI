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
  return this.http.get<IEvent[]>(this.eventURL)
  .pipe(map(response => response))
 }

  getEvento(id:number): Observable<IEvent> {
  return this.http.get<IEvent>(this.eventURL+'/'+id)
  .pipe(

    map(response => response));

  }

  postEventos(evento:IEvent): Observable<IEvent> {
  return this.http.post<{evento: IEvent,mensaje:string, ok?: boolean, error?: string}>(this.eventURL,evento)
  .pipe(
    catchError(((resp: HttpErrorResponse) => throwError(
      "Error insertando producto!. Código de servidor: "+resp.status+
      "Mensaje: "+  resp.message)

  )),
 map(resp => {
    console.log(resp.mensaje)
    if (!resp.ok) { throw resp.error; }
    return resp.evento;
    }));
 }
/*
 deleteEventos(id:number): Observable<number>{
  return this.http.delete<{evento:number}>(this.eventURL+"/"+ id)
  .pipe(map(response => response.evento))
 }
 */
  //EN VUESTRO SERVER
  deleteEventos(idEvento:number):Observable<string>{
    return this.http.delete<{mensaje:string}>(this.eventURL+"/"+idEvento).pipe(
      map(response=>response.mensaje)
    );
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



