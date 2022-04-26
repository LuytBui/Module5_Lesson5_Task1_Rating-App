import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rate-button',
  templateUrl: './rate-button.component.html',
  styleUrls: ['./rate-button.component.css']
})
export class RateButtonComponent implements OnInit {
  @Input() value: number;

  @Output() clickEvent: EventEmitter<number> = new EventEmitter<number>();

  buttonClick() {
    this.clickEvent.emit(this.value);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
