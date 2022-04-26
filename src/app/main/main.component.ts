import {Component, OnInit} from '@angular/core';
import {RatingUnit} from '../rating-unit';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  rateValue = 5;
  max = 10;

  ratingUnits: RatingUnit[] = [];

  readRating(event) {
    this.rateValue = event.value;
    for (let i = 0; i < this.ratingUnits.length; i++) {
      if (i < this.rateValue) {
        this.ratingUnits[i].isActive = true;
      } else {
        this.ratingUnits[i].isActive = false;
      }
    }
  }

  constructor() {
  }

  ngOnInit() {for (let i = 0; i < this.max; i++) {
    this.ratingUnits.push(
      {
        value: i + 1,
        isActive: false
      }
    );
  }
  }


}
