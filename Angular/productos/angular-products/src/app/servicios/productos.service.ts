import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IProduct } from '../interfaces/i-product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productURL = 'productos';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
  return this.http.get<{productos: IProduct[], ok: boolean, error?: string}>(this.productURL)
  .pipe(map(response => response.productos));
 }

 modificarEstrella(idProducto:number, cantidadEstrellas:number):Observable<boolean>{
return this.http.put<{productos:boolean,ok:boolean, error?: string}>
(this.productURL+"/rating/"+idProducto,{rating:cantidadEstrellas})
.pipe(map(response =>{
 console.log("Servidor productos:" +response.productos);
 if(!response.ok){
  throw response.error;
 }
 return true;
}),
catchError((respuesta:HttpErrorResponse)=>throwError(()=>
new Error("Error al modificar la estrella. Respuesta server:" + respuesta.status+ ""+respuesta.message))
))}




getProduct(id:number): Observable<IProduct> {
  return this.http.get<{producto: IProduct, ok: boolean, error?: string}>(this.productURL+"/"+id)
  .pipe(map(response => response.producto));
 }


 }










