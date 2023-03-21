import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
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

  changeRating(estrella:number) {
    this.productoHijo.rating=estrella;
  }

}
