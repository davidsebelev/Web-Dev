import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';
@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product;
  @Output() toggleFav = new EventEmitter<number>();

  onToggleFavorite(): void {
    this.toggleFav.emit(this.product.id);
  }
}