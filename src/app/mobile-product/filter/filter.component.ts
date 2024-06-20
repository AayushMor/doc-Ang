import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  InStock: number = 0;
  @Input()
  NotInStock: number = 0;

  @Output()
  radioButtonChanged: EventEmitter<string> = new EventEmitter<string>();

  allRadioButtonSelected: string = 'all';
  OnRadioButtonChanged() {
    this.radioButtonChanged.emit(this.allRadioButtonSelected);
  }
}
