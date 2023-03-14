import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(productos: IProduct[], filtro:string): IProduct[] {
    const filtroDef=filtro? filtro.toLowerCase():null;

    if(filtroDef)
    /* productos.filter(function(elem){
       return elem.desc.toLocaleLowerCase().includes(filtroDef);
     });*/
     return productos.filter(elem=>elem.desc.toLocaleLowerCase().includes(filtroDef));
   else
     return productos;
   /*return filtroDef?productos.filter(function(elem){
     return elem.desc.toLocaleLowerCase().includes(filtroDef);
   }):productos;*/
 }


}
