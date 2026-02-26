import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductList } from './components/product-list/product-list';
import { Category } from './model/category.model';
import { Product } from './model/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  categories: Category[] = [];
  products: Product[] = [];
  favorites: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getAllProducts(); 
    this.favorites = this.products.filter(p => p.isFavorite);
  }

  selectCategory(categoryId: number | null): void {
    this.selectedCategoryId = categoryId;
  }

  get visibleProducts(): Product[] {
    if (this.selectedCategoryId === null) return this.products;
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  toggleFavorite(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    product.isFavorite = !product.isFavorite;
    this.favorites = this.products.filter(p => p.isFavorite);
  }
}