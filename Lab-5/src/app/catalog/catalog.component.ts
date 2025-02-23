import { Component} from '@angular/core';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products = [
    { 
      id: 0, 
      name: 'Lezhanka', 
      price: 2598, 
      imageUrl: 'https://ae04.alicdn.com/kf/S3ced7f40598d45ba91b2cc676d51f943m.jpg_480x480.jpg',
      link: 'https://kaspi.kz/shop/p/lezhak-lezhankaser-60x60-sm-108181720/?0&c=750000000&ref=shared_link',
      likes: 0 
    },
    { 
      id: 1, 
      name: 'garlands', 
      price: 2299, 
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p90/pa2/17564035.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/shtora-tsvet-svechenija-teplyi-belyi-3-m-108102850/?0&c=750000000&ref=shared_link',
      likes: 0 
    },
    { 
      id: 2, 
      name: 'LOccitane Cherry Blossom',
      price: 15250, 
      imageUrl: 'https://kz.loccitane.com/cdn/shop/files/1200_PNG-24ET075CB21_RVB.png?crop=center&height=1024&v=1737443174&width=1024',
      link: 'https://kaspi.kz/shop/p/l-occitane-cherry-blossom-los-on-dlja-tela-250-ml-107402527/?0&c=750000000&ref=shared_link' ,
      likes: 0 
    },
    {
      id: 3, 
      name: 'this book i also want read', 
      price: 3950, 
      imageUrl: 'https://www.moscowbooks.ru/image/book/825/orig/i825424.jpg?cu=20241112103503',
      link: 'https://kaspi.kz/shop/p/mitchell-m-unesennye-vetrom-2-knigi--100517902/?0&c=750000000&ref=shared_link' ,
      likes: 0 
    },
    { 
      id: 4, 
      name: 'Marvis Sensitive Gums Gentle mint', 
      price: 4975, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIk9ceKr0v4t7qx6DT7PJEbS8EimOpe_2QbQ&s',
      link: 'https://kaspi.kz/shop/p/marvis-zubnaja-pasta-sensitive-gums-gentle-mint-75-ml-113746396/?0&c=750000000&ref=shared_link' ,
      likes: 0 
    },
    { 
      id: 5, 
      name: 'i read this book and want buy and read again', 
      price: 2020, 
      imageUrl: 'https://simg.marwin.kz/media/catalog/product/cache/41deb699a7fea062a8915debbbb0442c/c/o/cover1__w600_64_4.jpg',
      link: 'https://kaspi.kz/shop/p/plat-s-pod-stekljannym-kolpakom-103091113/?0&c=750000000&ref=shared_link' ,
      likes: 0 
    },
    { 
      id: 6, 
      name: 'Book i want buy', 
      price: 2270, 
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h38/82547853656094.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/suonson-s-stekljannyi-les-suonson-s--112355477/?0&c=750000000&ref=shared_link' ,
      likes: 0 
    },
    { 
      id: 7, 
      name: 'Amuse Vegan Soybean Energy cream', 
      price: 5799, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcjscmtNIAz2pQ8LWxdUFa-niS-qXcNU0qQ&s',
      link: 'https://kaspi.kz/shop/p/amuse-vegan-soybean-energy-krem-dlja-ruk-50-ml-113789805/?c=750000000&sr=2&qid=fbc15e682895ba84bddeb7bb02bd7ba5&ref=shared_link' ,
      likes: 0 
    },
    { 
      id: 8, 
      name: 'Amuse Lip Tint 03 Nupink', 
      price: 4599, 
      imageUrl: 'https://static.insales-cdn.com/images/products/1/593/825156177/06.jpg',
      link: 'https://kaspi.kz/shop/p/amuse-jel-fit-tint-tint-dlja-gub-03-nupink-109996809/?c=750000000&m=667027&sr=2&qid=fbc15e682895ba84bddeb7bb02bd7ba5&isPromoted=true&ref=shared_link' ,
      likes: 0 
    },
    {
      id: 9, 
      name: 'Cushion Amuse', 
      price: 12599, 
      imageUrl: 'https://static.insales-cdn.com/images/products/1/767/847930111/80302399651870.jpg',
      likes: 0 ,
      link: 'https://kaspi.kz/shop/p/amuse-dew-jelly-vegan-cushion-kushon-02-nude-15-ml-110186553/?c=750000000&m=30267773&sr=1&qid=fbc15e682895ba84bddeb7bb02bd7ba5&isPromoted=true&ref=shared_link' ,
    }
  ];
  likesProcess(index: number){
    this.products[index].likes=(this.products[index].likes || 0)+1;

  }
  deleteProcess(index: number){
    this.products.splice(index,1);
  }



}
