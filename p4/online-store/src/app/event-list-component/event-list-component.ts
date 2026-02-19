import { Component } from '@angular/core';
import { Product } from '../even.model';

@Component({
  selector: 'app-event-list-component',
  imports: [],
  templateUrl: './event-list-component.html',
  styleUrl: './event-list-component.css',
})
export class EventListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'LIFELOVER in Almaty',
      description: 'Песни культовой шведской группы LIFELOVER прозвучат в Алматы в исполнении группы-преемницы KALL с Кимом Карлсоном и оригинальным составом Жизнелюба. ',
      price: 20000,
      rating: 4.9,
      image: 'https://ticketon.kz/media/upload/51943u57013_10_04_26___ticketon_700x500.jpg',
      images: [
        'https://i.ytimg.com/vi/kFnwrEzoDWk/maxresdefault.jpg',
        'https://m.media-amazon.com/images/I/81UXYRgHesL._UF1000,1000_QL80_.jpg'
      ],
      link: 'https://ticketon.kz/almaty/event/lifeover-v-almaty'
    },
    {
      id:2,
    name:'Anacondaz',
    description:'Anacondaz едут в Алматы с презентацией альбома «Ночь с астраханцем»',
    price:16000,
    rating:5,
    image:'https://ticketon.kz/media/upload/36205u57997_anacondaz-v-almaty.jpg',
    images:[
      'https://ticketon.kz/media/upload/36205u57997_anacondaz-v-almaty-11.jpg',
      'https://ticketon.kz/media/upload/36205u57997_anacondaz-v-nur-sultane-22.jpg'
    ],
    link:'https://ticketon.kz/almaty/event/anacondaz-v-almaty?item_list_name=Рекомендуем&item_list_id=recommend&index=3'
    },
    {
      id:3,
    name:'Megadeth',
    description:'MEGADETH это рубеж, после которого метал уже никогда не будет прежним.',
    price:40000,
    rating:5,
    image:'https://ticketon.kz/media/upload/61611u45664_megadeth-almaty2026.jpg',
    images:[
      'https://ticketon.kz/media/upload/61611u45664_megadeth-almaty155555.jpg'
    ],
    link:'https://ticketon.kz/almaty/event/megadeth-almaty?item_list_name=Рекомендуем&item_list_id=recommend&index=9',
    },
    {
      id:4,
    name:'ЩЕНКИ в Алматы',
    description:'Танцпол - Входной билет в зону танцпола (информация о времени запуска и начала будет за несколько дней во встрече Вконтакте)',
    price:5000,
    rating:5,
    image:'https://ticketon.kz/media/upload/61391u57997_shchenkn-v-almaty-0711.jpg',
    images:[
    ],
    link:'https://ticketon.kz/almaty/event/shchenkn-v-almaty?item_list_name=События&item_list_id=allEvents&index=55',
    },
    {
      id:5,
    name:'ANNA ASTI в Алматы',
    description:'Анна Асти возвращается в Алматы с новым масштабным шоу «Царица» - после триумфального SOLD OUT-концерта в Алматы, где её выступление прошло при полной арене и стали ярким музыкальным событием',
    price:20000,
    rating:5,
    image:'https://ticketon.kz/media/upload/62109u58585_anna-asti-v-.jpg',
    images:[
    ],
    link:'https://ticketon.kz/almaty/event/anna-asti-v-almaty?item_list_name=События&item_list_id=allEvents&index=80',
    },
    {
      id:6,
    name:'Ne Prosto Orchestra - Наруто и Аватар',
    description:'NE PROSTO ORCHESTRA представляет долгожданный саундтрек концерт «НАРУТО И АВАТАР»',
    price:8500,
    rating:5,
    image:'https://ticketon.kz/media/upload/54854u56909_ne-prosto-orchestra-naruto-i-avatar-2026.jpeg',
    images:[
    ],
    link:'https://ticketon.kz/almaty/event/ne-prosto-orchestra-naruto-i-avatar?item_list_name=События&item_list_id=allEvents&index=100',
    },
    {
      id:7,
    name:'PHARAOH в Алматы',
    description:'Масштабный концертный тур «10:13» набрал огромные обороты, по праву закрепляя за Фараоном статус артиста огромных по меркам СНГ площадок.',
    price:20000,
    rating:5,
    image:'https://ticketon.kz/media/upload/61971u54364_pharaoh-v-almaty.jpg',
    images:[
    ],
    link:'https://ticketon.kz/almaty/event/pharaoh-v-almaty?item_list_name=События&item_list_id=allEvents&index=104',
    },
    {
      id:8,
    name:'Джон Гарик в Алматы',
    description:'Джон Гарик. Первый тур. 26 городов. Большая программа: презентация альбомов «Престиж» и «Классика», новые треки и старые хиты.',
    price:10000,
    rating:5,
    image:'https://ticketon.kz/media/upload/63388u56909_dzhon-garik-v-almaty.jpg',
    images:[
    ],
    link:'https://ticketon.kz/almaty/event/dzhon-garik-v-almaty?item_list_name=События&item_list_id=allEvents&index=129',
    },
    {
      id:9,
    name:'Park Live Almaty 2026',
    description:' а 22 августа легендарные Gorillaz.',
    price:40000,
    rating:5,
    image:'https://ticketon.kz/media/upload/56960u45664_park-live-almatyjw.jpg',
    images:[
      'https://ticketon.kz/media/upload/56960u45664_56960u45664_approved-photo-1-by-david-james-swanson-1.jpg',
      'https://ticketon.kz/media/upload/56960u45664_56960u45664_gorillaz-the-mountain-press-image.jpg'
    ],
    link:'https://ticketon.kz/almaty/event/park-live-almaty?item_list_name=События&item_list_id=allEvents&index=158',
    },
    {
      id:10,
    name:'Deep Purple в Алматы',
    description:'Легендарное возвращение Deep Purple в Казахстан самое ожидаемое рок-событие года!',
    price:10700,
    rating:5,
    image:'https://ticketon.kz/media/upload/62502u57919_61799u45664_deep-purple-v-almaty.jpg',
    images:[
      'https://ticketon.kz/media/upload/62502u57919_61799u45664_deep-purple-v-almaty2025511-2.jpeg',
      'https://ticketon.kz/media/upload/62502u57919_61799u45664_deep-purple-v-almaty2025511-1.jpeg'
    ],
    link:'https://ticketon.kz/almaty/event/deep-purple-v-almaty-kg?item_list_name=События&item_list_id=allEvents&index=137',
    },
  ]
  changeImage(product: Product, newImageUrl: string) {
    product.image = newImageUrl;
  }
}
