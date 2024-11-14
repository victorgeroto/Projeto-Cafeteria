import { Component, } from '@angular/core';
import { ProdcutService } from '../../model/service/prodcut.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Iprodcut } from '../../model/service/iprodcut';
import { StarRatingDirective } from '../directive/star-rating.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule, StarRatingDirective],
  providers: [ProdcutService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  
  product: Iprodcut[] = [];
  filteredProducts: Iprodcut[] = [];

  selectedButton: string = 'featured';

  constructor(private productService: ProdcutService) {
    this.loadProducts(this.selectedButton);
  }
  loadProducts(selectedButton: string): void {
    this.productService.getProducts().subscribe(
      (data: Iprodcut[]) => {
        this.product = data;
        if (selectedButton === 'featured') {
          this.filteredProducts = this.product;
         } else {
          this.filteredProducts = this.product.filter(product => product.filter === selectedButton);
         }
         this.selectedButton = selectedButton;
      },
      (error) => {
        console.error('Erro ao carregar os produtos: ', error);
      }
    );
  }
}
