import { Component } from '@angular/core';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro',
      description: 'The iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars.',
      price: 525000,
      rating: 4.9,
      image: 'https://cdn.new-brz.net/app/public/models/MTUX3QL-A/small/j/250206150013168924.jpg',
      images: [
        'https://apple-market.ru/image/cache/catalog/iPhone%2015/iPhone%2015%20Pro%20Max/iPhone-15-Pro-Max-blue-1.jpg_500.webp',
        'https://cdn.new-brz.net/app/public/models/MTUW3AA-A/large/w/241224123940845686.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-sinii-113138331/?c=750000000'
    },
    {
      id:2,
      name:'Playstation 5',
      description: 'The PlayStation 5 is a high-performance gaming console featuring an ultra-high-speed SSD for near-instant load times, custom AMD GPU/CPU for 4K gaming at up to 120fps, and ray tracing.',
      price: 300000,
      rating: 5.0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h90/63948654936094.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h00/63948657491998.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?srsltid=AfmBOorkHCsZrTBVns703OoiTnicu3T5zGJED5tyZxObHvg1jaYawCNv'
    },
    {
      id:3,
      name:'Steam Deck OLED 1',
      description: 'The Steam Deck is a powerful, portable handheld gaming computer by Valve Corporation that allows users to play their Steam library on the go.',
      price: 423171,
      rating: 5.0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hdd/h4d/84654918139934.jpg?format=gallery-medium',
      images: [
        'https://ir-3.ozone.ru/s3/multimedia-b/wc1000/6821754239.jpg',
        'https://i5.walmartimages.com/seo/2023-Steam-Deck-OLED-Handheld-Game-Console-1TB_5215401d-dc2b-4bbb-b427-e1da0ee6546b.6c8f42da37d404999cd03028e932d0b8.jpeg'
      ],
      link:'https://kaspi.kz/shop/p/steam-deck-oled-1-tb-valve-steam-deck-115152244/?c=750000000'
    },
    {
      id:4,
      name:'Nintendo Switch 2',
      description: 'The Nintendo Switch 2 (released June 2025) is a hybrid console featuring a 7.9-inch 1080p LCD screen with 120 Hz VRR, a custom NVIDIA processor, 256GB storage, and 4K TV output',
      price: 268647,
      rating: 5.0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pf1/p4a/46635546.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd5/p4a/46635547.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb9/p4a/46635548.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/nintendo-switch-2-140718258/?c=750000000'
    },
    {
      id:5,
      name:'MacBook Air 13',
      description: 'The 2020 13-inch MacBook Air is a thin, light laptop available in two major versions: the Intel-based version with a scissor-switch Magic Keyboard and a, later in 2020, significantly faster version featuring Apple’s M1 chip.',
      price: 395506,
      rating: 5.0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h83/63947832557598.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000'
    },
    {
      id:6,
      name:'Apple iPad A16',
      description: 'The 2025 Apple iPad (11th Gen/A16) is a 10.86-inch Liquid Retina display tablet featuring the A16 Bionic chip, designed for everyday productivity and creative tasks.',
      price: 209244,
      rating: 5.0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000'
    },
    {
      id:7,
      name:'Apple AirPods Pro 2',
      description: 'The Apple AirPods Pro (2nd Generation) with MagSafe Charging Case (USB-C) features the H2 chip for up to 2x more Active Noise Cancellation, improved Transparency mode, and Personalized Spatial Audio.',
      price: 104046,
      rating: 5.0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
    },
    {
      id:8,
      name:'Apple AirPods Max 2',
      description: 'The Apple AirPods Max 2 (anticipated) are expected to be a significant update to Apple’s high-fidelity over-ear headphones, featuring an H2 or H3 chip for superior Active Noise Cancellation (ANC), Adaptive Audio, and improved spatial audio',
      price: 279683,
      rating: 5.0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/'
    },
    {
      id:9,
      name:'Apple iMac 24',
      description: 'The 2024 Apple iMac 24-inch (Model MWUF3, Blue) is an all-in-one desktop featuring the powerful M4 chip (8-core CPU/8-core GPU), 16GB of unified memory, and 256GB SSD storage.',
      price: 938839,
      rating: 5.0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p60/p1b/12749204.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdb/p31/21718630.png?format=gallery-medium',
      ],
      link:'https://kaspi.kz/shop/p/apple-imac-24-2024-mwuf3-sinii-131303565/?c=750000000'
    },
    {
      id:10,
      name:'Resident Evil Revelatio 2',
      description: 'The Island Escape: Fan favorite Claire Redfield and Moira Burton (daughter of Barry Burton) are kidnapped and wake up in a terrifying, abandoned detention facility on a remote island.',
      price: 14961,
      rating: 5.0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pc6/p7a/34496378.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4f/p7d/34496380.jpg?format=gallery-medium',
      ],
      link:'https://kaspi.kz/shop/p/resident-evil-revelations-2-ps4-rus-10700140/?c=750000000'
    },
  ]
  shareOnWhatsApp(productLink: string) {
    
    const url = `https://wa.me/?text=${encodeURIComponent('Check this out: ' + productLink)}`;
    window.open(url, '_blank'); 
  }
  
  shareOnTelegram(productLink: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(productLink)}&text=${encodeURIComponent('Check this product on Kaspi!')}`;
    window.open(url, '_blank');
  }

  changeImage(product: Product, newImageUrl: string) {
    product.image = newImageUrl;
  }
}
