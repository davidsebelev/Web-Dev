import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes += 1;
  }

  remove() {
    this.delete.emit(this.product.id);
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}`, '_blank');
  }

  currentImageIndex = 0;

  // currentImageIndex = 0;

selectImage(index: number) {
  this.currentImageIndex = index;
}

changeImage(newImageUrl: string) {
  const index = this.product.images.indexOf(newImageUrl);
  if (index !== -1) {
    this.currentImageIndex = index;
  }
}
}