import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  titulo = 'LISTA DE PRODUCTOS';
  alturaImagen= 40
  colorTs= "red"
  quieroEstilo1=true
  quieroEstilo2=false
  showImage = true
  filterSearch = 'sin filtro';

  cabeceras = {
    descripcion: 'Producto',
    precio: 'Precio',
    avail: 'Disponible',
    image: "Imagen",
  };
  productos: IProduct[] = [
    {
      id: 1,
      desc: 'SSD hard drive',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      desc: 'LGA1151 Motherboard',
      avail: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4,
    },
  ];

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
