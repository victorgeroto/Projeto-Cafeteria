import { Input, ElementRef, OnChanges, Directive } from "@angular/core";

@Directive({
  selector: '[appStarRating]',
  standalone: true
})
export class StarRatingDirective implements OnChanges {

  @Input('appStarRating') rating !: number;
  
  constructor(private el: ElementRef) {}
  
  ngOnChanges(): void {
  this. setstars();
  }

  setstars() {
  const maxStars = 5;
  const fullstars = Math. floor(this.rating);
  const halfstar = this.rating % 1 >= 0.5;
  const emptystars = maxStars - fullstars - (halfstar ? 1 : 0);
  
  let starHtml = '';
  
  for (let i = 0; i < fullstars; i++) {
  starHtml += '<span class="star full" style="color: #BC8A55">&#9733;</span>';
  }

  if (halfstar) {
  starHtml += '<span class="star half" style="background: linear-gradient(90deg, #BC8A55 50%, #ccc 50%);background-clip: text; color: transparent">&#9733;</span>';
  }

  for (let i = 0; i < emptystars; i++) {
  starHtml += '<span class="star empty" style="color:#ccc">&#9733;</span>';
  }
  
    this.el.nativeElement. innerHTML = starHtml;
  }
}

