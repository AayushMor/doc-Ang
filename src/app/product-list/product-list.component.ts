import { Component } from '@angular/core';
import { race } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  Details = [
    {
      name: 'Aayush',
      age: 84,
      color: 'black',
      race: 'indian',
    },
    {
      name: 'Aayush1',
      age: 41,
      color: 'semi-black',
      race: 'indian',
    },
    {
      name: 'Aayush2',
      age: 35,
      color: 'white',
      race: 'african',
    },
    {
      name: 'Aayush4',
      age: 64,
      color: 'semi-white',
      race: 'semi-indian',
    },
  ];
}
