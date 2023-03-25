import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductosService } from "../servicios/productos.service";
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private servicio: ProductosService) { }

ngOnInit(){
  this.servicio.getProducts().subscribe(
    productosVienenServidor => this.productos = productosVienenServidor
    );

}

  titulo = 'LISTA DE PRODUCTOS';
  alturaImagen= 40
  colorTs= "red"
  quieroEstilo1=true
  quieroEstilo2=false
  showImage = true
  filterSearch = '';

  cabeceras = {
    descripcion: 'Producto',
    precio: 'Precio',
    avail: 'Disponible',
    image: "Imagen",
    rating: "Puntuación",
  };
  productos: IProduct[] = [];

toggleImage(){
  this.showImage=!this.showImage;
}
cambiarEstilo(){
  const radio = document.getElementsByTagName("input")[0];
  if(radio.checked){
    this.quieroEstilo1=true;
    this.quieroEstilo2=false;
  }else{
    this.quieroEstilo1=false;
    this.quieroEstilo2=true;
  }

}

}
