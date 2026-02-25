import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() products: Product[] = [];

  handleDelete(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
