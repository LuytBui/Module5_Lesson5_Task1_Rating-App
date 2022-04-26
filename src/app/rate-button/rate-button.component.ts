import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RatingUnit} from '../rating-unit';

@Component({
  selector: 'app-rate-button',
  templateUrl: './rate-button.component.html',
  styleUrls: ['./rate-button.component.css']
})
export class RateButtonComponent implements OnInit {
  @Input() ratingUnit: RatingUnit;

  @Output() clickEvent: EventEmitter<RatingUnit> = new EventEmitter<RatingUnit>();

  buttonClick() {
    this.clickEvent.emit(this.ratingUnit);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
