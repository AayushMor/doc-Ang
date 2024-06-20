import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent {
  @Input()
  mobi!: {
    name: String;
    price: String;
    color: String;
    inStock: boolean;
    mimg: String;
  };
}
