import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { PredictionPercentage } from '../reducers';

const roundTo2 = (x) => Math.round((x * 100) / 100);

@Component({
  selector: 'immi-predict-result-header',
  templateUrl: './predict-result-header.component.html',
  styleUrls: ['./predict-result-header.component.css']
})
export class PredictResultHeaderComponent implements OnChanges {

  @Input() name: string;
  @Input() progress: number;
  @Input() size: number;
  @Input() percentages: PredictionPercentage[];
  @Input() resultTime?: Date;
  @Input() startTime: Date;
  @Output() closed = new EventEmitter();

  percentage: number;
  label: string;

  faWindowClose = faWindowClose;

  constructor() { }


  ngOnChanges() {
    if (this.percentages.length) {
      const max = this.percentages.map((p, i) => ({ percentage: p.percentage, label: p.label }))
        .reduce((p, c) => p.percentage > c.percentage ? p : c);

      const isSure = max.percentage > 0.7;
      this.label = isSure ? `${max.label}` : `Inconclusive`;
      this.percentage = max.percentage;
    }
  }


  getImageSize() {
    return `${roundTo2(this.size * 1024)} Kb`;
  }

  getPercentage() {
    return `${roundTo2(this.percentage * 100)}%`;
  }

  getResult() {
    return this.label;
  }

  getTime() {
    if (this.resultTime) {
      return `${(this.resultTime.getTime() - this.startTime.getTime())}ms`;
    }
  }

  close() {
    this.closed.emit();
  }
}
