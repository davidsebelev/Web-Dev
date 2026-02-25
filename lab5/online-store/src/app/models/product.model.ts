export interface Product {
    id: number;
    categoryId: number;  // к какой категории относится товар
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    images: string[];
    link: string;
    likes: number;       // сколько лайков, старт с 0
  }