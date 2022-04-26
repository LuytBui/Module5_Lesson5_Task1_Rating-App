import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  rateValue: number = 5;

  readRating(event) {
    this.rateValue = event;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
