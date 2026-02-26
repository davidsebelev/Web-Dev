import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { Product } from '../model/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Phones' },
    { id: 2, name: 'Audio' },
    { id: 3, name: 'Laptops' },
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13',
      price: 450000,
      image: 'https://cdn.new-brz.net/app/public/models/MLPK3ZD-A/large/w/250318170022513675.webp',
      description: 'Apple smartphone',
      categoryId: 1,
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Samsung S23',
      price: 420000,
      image: 'https://cdn.new-brz.net/app/public/models/SM-S911BZKDSEK/large/j/230413160022115195.jpg',
      description: 'Samsung flagship phone',
      categoryId: 1,
      isFavorite: false,
    },
    {
      id: 3,
      name: 'AirPods Pro',
      price: 120000,
      image: 'https://cdn.new-brz.net/app/public/models/MWP22ZM-A/large/w/200213080019430398.webp',
      description: 'Wireless earbuds',
      categoryId: 2,
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Sony WH-1000XM5',
      price: 180000,
      image: 'https://sonycenter.kz/image/cache/catalog/products/new_img/audio/wh1000xm5/naushniki-sony-wh1000xm5-01-600x600.png',
      description: 'Noise cancelling headphones',
      categoryId: 2,
      isFavorite: false,
    },
    {
      id: 5,
      name: 'MacBook Air M2',
      price: 650000,
      image: 'https://www.apple.com/v/macbook-air/w/images/overview/hero/hero_static__c9sislzzicq6_large.png',
      description: 'Lightweight laptop',
      categoryId: 3,
      isFavorite: false,
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  
  getAllProducts(): Product[] {
    return this.products;
  }
}