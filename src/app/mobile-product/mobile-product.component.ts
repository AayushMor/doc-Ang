import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-product',
  templateUrl: './mobile-product.component.html',
  styleUrls: ['./mobile-product.component.scss'],
})
export class MobileProductComponent {
  mobile = {
    name: 'Iphone 15',
    price: '$444',
    color: 'black/white',
    inStock: 10,
    mimg: '/assets/apple.jpg',
  };
}
