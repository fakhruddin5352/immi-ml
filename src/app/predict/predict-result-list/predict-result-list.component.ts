import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prediction } from '../reducers';

@Component({
  selector: 'immi-predict-result-list',
  templateUrl: './predict-result-list.component.html',
  styleUrls: ['./predict-result-list.component.css']
})
export class PredictResultListComponent implements OnInit {

  @Input('predictions') predictions: Prediction[];
  @Output() closed = new EventEmitter<Prediction>();

  constructor() { }

  ngOnInit() {
  }

  close(prediction: Prediction) {
    this.closed.emit(prediction);
  }

}
