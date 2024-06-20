import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-product',
  templateUrl: './mobile-product.component.html',
  styleUrls: ['./mobile-product.component.scss'],
})
export class MobileProductComponent {
  mobile = [
    {
      name: 'Iphone 15',
      price: '$444',
      color: 'black/white',
      inStock: true,
      mimg: '/assets/apple.jpg',
    },
    {
      name: 'Iphone 15',
      price: '$444',
      color: 'black/white',
      inStock: false,
      mimg: '/assets/apple.jpg',
    },
    {
      name: 'Iphone 15',
      price: '$444',
      color: 'black/white',
      inStock: false,
      mimg: '/assets/apple.jpg',
    },
    {
      name: 'Iphone 15',
      price: '$444',
      color: 'black/white',
      inStock: true,
      mimg: '/assets/apple.jpg',
    },
    {
      name: 'Iphone 15',
      price: '$444',
      color: 'black/white',
      inStock: false,
      mimg: '/assets/apple.jpg',
    },
    {
      name: 'Iphone 15',
      price: '$444',
      color: 'black/white',
      inStock: true,
      mimg: '/assets/apple.jpg',
    },
  ];

  productCount = this.mobile.length;
  productInStock = this.mobile.filter((p) => p.inStock === true).length;
  productNotInStock = this.mobile.filter((p) => p.inStock === false).length;

  onRadioButtonChanged: string = 'all';

  onFilterChange(value: string) {
    this.onRadioButtonChanged = value;
  }
}
