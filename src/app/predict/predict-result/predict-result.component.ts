import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Prediction } from '../reducers';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'immi-predict-result',
  templateUrl: './predict-result.component.html',
  styleUrls: ['./predict-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PredictResultComponent implements OnInit {

  @Input('prediction') prediction: Prediction;
  @Output() closed = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.closed.emit();
  }
}
