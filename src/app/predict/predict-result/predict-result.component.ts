import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prediction } from '../reducers';
import { BaseChartDirective } from 'ng2-charts';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'immi-predict-result',
  templateUrl: './predict-result.component.html',
  styleUrls: ['./predict-result.component.css']
})
export class PredictResultComponent implements OnInit {

  @Input('prediction') prediction: Prediction;
  @Output() closed = new EventEmitter();

  reader = new FileReader();
  imageUrl = '';

  barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  barChartLabels: string[];
  barChartType = 'horizontalBar';
  barChartLegend = false;
  barChartData: any;
  colors = [
    {
      'backgroundColor': [
        'red', 'blue', 'green', 'yellow', 'orange', 'brown', 'black', 'pink', 'cyan'
      ]
    }
  ];

  label = '';
  percentage = 0;
  faWindowClose = faWindowClose;

  constructor() { }

  ngOnInit() {
    this.reader.readAsDataURL(this.prediction.file.file);
    this.reader.addEventListener('load', () => {
      this.imageUrl = this.reader.result as string;
    }, false);

    if (this.prediction.percentages.length) {
      this.barChartLabels = this.prediction.percentages.map(p => p.label);
      const max = this.prediction.percentages.map((p, i) => ({ percentage: p.percentage, color: this.colors[i], label: p.label }))
        .reduce((p, c) => p.percentage > c.percentage ? p : c);

      const isSure = max.percentage > 0.7;
      this.label = isSure ? `${max.label}` : `Inconclusive`;
      this.percentage = max.percentage;
      const color = isSure ? max.color : 'gray';
      this.barChartData = [{
        data: this.prediction.percentages.map(p => Math.round(p.percentage * 10000) / 100)
      }];
    }
  }

  getResult() {
    return this.label;
  }
  getImageSize() {
    return `${Math.round(this.prediction.file.file.size * 100 / 1024) / 100} Kb`;
  }


  getPercentage() {
    return `${Math.round(this.percentage * 10000) / 100}%`;
  }

  getTime() {
    if (this.prediction.resultTime) {
      return `${(this.prediction.resultTime.getTime() - this.prediction.startTime.getTime())}ms`;
    }
  }
  close() {
    this.closed.emit();
  }
}
