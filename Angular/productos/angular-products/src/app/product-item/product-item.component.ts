import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductosService } from '../servicios/productos.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})



export class ProductItemComponent {
  alturaImagen= 40
  colorTs= "red"
  @Input()productoHijo!:IProduct;
  @Input()mostrarImagen!:boolean;
  @Input()quieroEstilo1!:boolean;
  @Input()quieroEstilo2!:boolean;

  constructor(private productosServicios:ProductosService){}

  changeRating(estrella:number) {
    //this.productoHijo.rating=estrella;
    this.productosServicios.modificarEstrella(this.productoHijo.id,estrella).subscribe({
      next:respu=>{ this.productoHijo.rating=estrella;console.log(respu);},
      error: e=>console.log(e),
    });
  }

}
