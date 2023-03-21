import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
auxRating!: number;
@Input() rating!: number;


restoreRating(){
this.auxRating= this.rating;
}

@Output() cambiarRating =new EventEmitter<number>();
setRating(){
console.log("click");
this.cambiarRating.emit(this.auxRating);
}

}
