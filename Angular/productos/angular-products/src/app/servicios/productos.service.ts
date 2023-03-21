import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../interfaces/i-product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productURL = 'http://curso.i234.me:8080/productos';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
  return this.http.get<{productos: IProduct[], ok: boolean, error?: string}>(this.productURL)
  .pipe(map(response => response.productos));
 }

}






