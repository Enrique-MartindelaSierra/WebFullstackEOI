
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { IProduct } from '../interfaces/i-product';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;
  constructor(private route: ActivatedRoute,
  private productosService: ProductosService,
  private routeDirecto:Router) { }

  ngOnInit() {
  const id = +this.route.snapshot.params['id']; // Recibimos parámetro
  this.productosService.getProduct(id)
  .subscribe({
  next:(p) => (this.product = p),
  error:e => console.error(e)}
  );
  }


  changeRating(estrella:number) {
    //this.productoHijo.rating=estrella;
    this.productosService.modificarEstrella(this.product.id,estrella).subscribe({
      next:respu=>{ this.product.rating=estrella;console.log(respu);},
      error: e=>console.log(e),
    });
  }



  goBack(){
    this.routeDirecto.navigate(["/products"]);
  }

  }
